using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Application.UserNotification.Query
{
    public class
        GetUSerNotificationCommandHandler : IRequestHandler<GetUserNotificationCommand,
            IResult<GetUserNotificationResponse>>
    {
        private readonly ICurrentUserService _currentUserService;
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetUSerNotificationCommandHandler(ICurrentUserService currentUserService, ApplicationContext context,
            IMapper mapper)
        {
            _currentUserService = currentUserService;
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<GetUserNotificationResponse>> Handle(GetUserNotificationCommand request,
            CancellationToken cancellationToken)
        {
            if (string.IsNullOrEmpty(_currentUserService.AppUserId))
            {
                return await Result<GetUserNotificationResponse>.FailAsync("Invalid user");
            }

            var userNotification =
                await _context.UserNotifications.FirstOrDefaultAsync(x => x.AppUserId == _currentUserService.AppUserId,
                    cancellationToken);
            if (userNotification == null)
            {
                return await Result<GetUserNotificationResponse>.FailAsync("Notification does not exist for this user");
            }

            var result = _mapper.Map<GetUserNotificationResponse>(userNotification);

            return await Result<GetUserNotificationResponse>.SuccessAsync(result);
        }
    }
}