using AspNetCoreHero.Results;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Application.Message.Query
{
    public class
        GetThreadMessagesCommandHandler : IRequestHandler<GetThreadMessagesCommand, IResult<GetThreadMessagesResponse>>
    {
        private readonly ApplicationContext _context;
        private readonly ICurrentUserService _currentUserService;

        public GetThreadMessagesCommandHandler(ApplicationContext context, ICurrentUserService currentUserService)
        {
            _context = context;
            _currentUserService = currentUserService;
        }

        public async Task<IResult<GetThreadMessagesResponse>> Handle(GetThreadMessagesCommand request,
            CancellationToken cancellationToken)
        {
            var threadFound = await (from thread in _context.MessageThreads
                join participant in _context.MessageThreadParticipants on thread.Id equals participant.MessageThreadId
                join appUser in _context.Users on participant.AppUserId equals appUser.Id
                where appUser.Id == _currentUserService.AppUserId
                      && thread.Id == request.ThreadId
                      && !participant.IsDeleted
                      && !thread.IsDeleted
                select thread).AnyAsync(cancellationToken);

            if (!threadFound)
            {
                return Result<GetThreadMessagesResponse>.Fail("Thread not found");
            }

            var allMessages = await (from message in _context.Messages.Where(x => x.MessageThreadId == request.ThreadId)
                join thread in _context.MessageThreads on message.MessageThreadId equals thread.Id
                join appUser in _context.Users on message.SenderId equals appUser.Id
                where appUser.Id == _currentUserService.AppUserId
                      && thread.Id == request.ThreadId
                      && !message.IsDeleted
                      && !thread.IsDeleted
                select new ThreadMessagesDto()
                {
                    Id = message.Id,
                    Body = message.Body,
                    SenderFirstName = appUser.FirstName,
                    SenderLastName = appUser.LastName,
                    CreatedAt = message.CreatedAt,
                    UpdatedAt = message.UpdatedAt,
                    SenderId = appUser.Id,
                }).ToListAsync(cancellationToken);

            var result = new GetThreadMessagesResponse
            {
                ThreadId = request.ThreadId,
                OtherMessages = allMessages
            };
            return Result<GetThreadMessagesResponse>.Success(result, "Successful");
        }
    }
}