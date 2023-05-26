using AspNetCoreHero.Results;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using mms.Application.Account.ChangePassword;
using mms.Application.Common.Helper;
using mms.Domain.Entities;
using mms.Infrastructure.Context;
using MessageEntity = mms.Domain.Entities.Message;

namespace mms.Application.Message.Command.CreateMessage
{
    public class CreateMessageCommandHandler : IRequestHandler<CreateMessageCommand, IResult<CreateMessageResult>>
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly ApplicationContext _context;

        public CreateMessageCommandHandler(UserManager<AppUser> userManager, ApplicationContext context)
        {
            _userManager = userManager;
            _context = context;
        }

        public async Task<IResult<CreateMessageResult>> Handle(CreateMessageCommand request,
            CancellationToken cancellationToken)
        {
            var sender = await (from user in _userManager.Users
                where user.Id == request.AppUserId
                select new
                {
                    user.Id
                }).FirstOrDefaultAsync(cancellationToken);

            if (sender == null)
            {
                return Result<CreateMessageResult>.Fail("User does not exist");
            }

            if (request.ThreadId != null)
            {
                var existingThread =
                    await _context.MessageThreads.FirstOrDefaultAsync(x => x.Id == request.ThreadId, cancellationToken);
                if (existingThread != null)
                {
                    return Result<CreateMessageResult>.Fail("Thread not found");
                }

                var threadParticipantsIds =
                    await (from threadParticipant in _context.MessageThreadParticipants
                        where threadParticipant.MessageThreadId == existingThread.Id
                        select threadParticipant.AppUserId).ToListAsync();
                if (!threadParticipantsIds.Any())
                {
                    return Result<CreateMessageResult>.Fail("Thread not found in thread participant");
                }

                var isUserInMessageParticipants = threadParticipantsIds.Contains(sender.Id);
                if (!isUserInMessageParticipants)
                {
                    return Result<CreateMessageResult>.Fail("Sender cannot send a message to this thread");
                }

                var message = new MessageEntity()
                {
                    SenderId = sender.Id,
                    Body = request.Body,
                    MessageThreadId = existingThread.Id
                };

                await _context.Messages.AddAsync(message, cancellationToken);
                existingThread.LastMessageId = message.Id;
                await _context.SaveChangesAsync(cancellationToken);

                //TODO:Send Notification with SignalIr

                return Result<CreateMessageResult>.Success(new CreateMessageResult()
                {
                    Id = message.Id,
                    MessageThreadId = existingThread.Id
                }, "Message successfully created");
            }

            var recipientId = await (from user in _userManager.Users
                    where user.Id == request.RecipientId
                    select
                        user.Id
                ).FirstOrDefaultAsync(cancellationToken);

            if (recipientId == null)
            {
                return Result<CreateMessageResult>.Fail("Recipient does not exist");
            }

            if (recipientId == request.AppUserId)
            {
                return Result<CreateMessageResult>.Fail("Message cannot be sent to same person");
            }

            var participantsIds = new List<string>
            {
                sender.Id,
                recipientId
            };

            var messageThreadParticipantsHash = HashHelper.Hash(participantsIds);

            var existingMessageThreads = await _context.MessageThreads
                .Where(x => x.MessageThreadParticipantHash == messageThreadParticipantsHash)
                .ToListAsync(cancellationToken);

            var thread = existingMessageThreads.FirstOrDefault();

            if (existingMessageThreads.Count > 1)
            {
                thread = (from messageThread in _context.MessageThreads
                    where messageThread.MessageThreadParticipantHash == messageThreadParticipantsHash
                    join messageThreadParticipant1 in _context.MessageThreadParticipants on messageThread.Id equals
                        messageThreadParticipant1.MessageThreadId
                    where messageThreadParticipant1.AppUserId == sender.Id
                    join messageThreadParticipant2 in _context.MessageThreadParticipants on
                        messageThreadParticipant1.MessageThreadId equals messageThreadParticipant2.MessageThreadId
                    where messageThreadParticipant2.AppUserId == recipientId
                    select messageThread).FirstOrDefault();
            }

            if (thread is null)
            {
                thread = new MessageThread()
                {
                    Subject = request.Subject,
                    MessageThreadParticipantHash = messageThreadParticipantsHash
                };

                var recipientParticipant = new MessageThreadParticipant()
                {
                    MessageThread = thread,
                    AppUserId = recipientId
                };

                var senderParticipant = new MessageThreadParticipant()
                {
                    MessageThread = thread,
                    AppUserId = sender.Id
                };

                await _context.MessageThreads.AddAsync(thread, cancellationToken);
                await _context.MessageThreadParticipants.AddRangeAsync(new List<MessageThreadParticipant>
                {
                    recipientParticipant,
                    senderParticipant
                }, cancellationToken);
            }

            var newMessage = new MessageEntity()
            {
                SenderId = sender.Id,
                Body = request.Body,
                MessageThreadId = thread.Id
            };
            await _context.Messages.AddAsync(newMessage, cancellationToken);
            thread.LastMessageId = newMessage.Id;
            await _context.SaveChangesAsync(cancellationToken);

            //TODO:Trigger Signalr
            return Result<CreateMessageResult>.Success(new CreateMessageResult()
            {
                Id = newMessage.Id,
                MessageThreadId = thread.Id
            }, "Message successfully created");
        }
    }
}