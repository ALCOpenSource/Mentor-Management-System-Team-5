using AspNetCoreHero.Results;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Application.Message.Query.GetThread
{
    public class GetThreadCommandHandler : IRequestHandler<GetThreadCommand, IResult<GetThreadMessagesResponse>>
    {
        private readonly ApplicationContext _context;
        private readonly ICurrentUserService _currentUserService;

        public GetThreadCommandHandler(ApplicationContext context, ICurrentUserService currentUserService)
        {
            _context = context;
            _currentUserService = currentUserService;
        }

        public async Task<IResult<GetThreadMessagesResponse>> Handle(GetThreadCommand request,
            CancellationToken cancellationToken)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == _currentUserService.AppUserId,
                cancellationToken);
            if (user == null)
            {
                return Result<GetThreadMessagesResponse>.Fail("User not found");
            }

            var allThreads = await (from thread in _context.MessageThreads
                join participant in _context.MessageThreadParticipants on thread.Id equals participant.MessageThreadId
                join messages in _context.Messages on thread.LastMessageId equals messages.Id into tempMessage
                from message in tempMessage.DefaultIfEmpty()
                where participant.AppUserId == _currentUserService.AppUserId
                      && !participant.IsArchived
                      && !participant.IsDeleted
                      && !thread.IsDeleted
                select new MessageThreadDto
                {
                    ThreadId = thread.Id,
                    CreatedAt = thread.CreatedAt,
                    UpdatedAt = thread.UpdatedAt,
                    Subject = thread.Subject,
                    IsArchived = participant.IsArchived,
                    IsPinned = participant.IsPinned,
                    PinnedDate = participant.PinnedDate,
                    LastReadTime = participant.LastReadTime,
                    LastMessage = new ThreadMessagesDto
                    {
                        MessageId = message.Id,
                        Body = message.Body,
                        CreatedAt = message.CreatedAt,
                        UpdatedAt = message.UpdatedAt
                    }
                }).ToListAsync(cancellationToken);
            var allThreadDictionary = new Dictionary<string, MessageThreadDto>();
            var result = new GetThreadMessagesResponse();
            foreach (var thread in allThreads)
            {
                if (thread.IsPinned)
                {
                    result.PinnedMessageThreads.Add(thread);
                }
                else
                {
                    result.OtherMessageThreads.Add(thread);
                }

                allThreadDictionary.Add(thread.ThreadId, thread);
            }

            await IncludeThreadParticipants(allThreadDictionary, cancellationToken);
            return Result<GetThreadMessagesResponse>.Success(result, "Successfully retrieved messages");
        }

        private async Task IncludeThreadParticipants(Dictionary<string, MessageThreadDto> allThreads,
            CancellationToken cancellationToken)
        {
            var allThreadIds = (from threadId in allThreads.Keys select threadId).ToList();
            var appParticipants = await (from thread in _context.MessageThreads
                join participant in _context.MessageThreadParticipants on thread.Id equals participant.MessageThreadId
                join appUser in _context.Users on participant.AppUserId equals appUser.Id
                where allThreadIds.Contains(thread.Id)
                      && !participant.IsDeleted
                select new ThreadParticipantDto
                {
                    ThreadId = thread.Id,
                    ParticipantId = participant.Id,
                    AppUserId = participant.AppUserId,
                    FirstName = appUser.FirstName,
                    LastName = appUser.LastName
                }).ToListAsync(cancellationToken);

            var unreadMessages = await (from thread in _context.MessageThreads
                join participant in _context.MessageThreadParticipants on thread.Id equals participant.MessageThreadId
                join message in _context.Messages on thread.Id equals message.MessageThreadId
                where message.CreatedAt > participant.LastReadTime
                      && allThreadIds.Contains(thread.Id)
                      && participant.AppUserId == _currentUserService.AppUserId
                      && !participant.IsDeleted
                select new
                {
                    ThreadId = thread.Id,
                    ParticipantId = participant.Id
                }).ToListAsync(cancellationToken);

            foreach (var participant in appParticipants)
            {
                participant.IsCurrentPerson = participant.AppUserId == _currentUserService.AppUserId;
                var thread = allThreads[participant.ThreadId];

                if (participant.AppUserId != _currentUserService.AppUserId)
                {
                    continue;
                }

                thread.UnReadMessageCount = unreadMessages.Count(m => m.ThreadId == thread.ThreadId
                                                                      && m.ParticipantId ==
                                                                      participant.ParticipantId);
                thread.ThreadParticipants.Add(participant);
            }
        }
    }
}