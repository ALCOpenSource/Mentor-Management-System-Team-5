using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Application.UserNotification.Command.EditUserNotification;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Application.UserNotification.Query
{
    public class
        GetUSerNotificationCommandHandler : IRequestHandler<GetUSerNotificationCommand,
            IResult<GetUSerNotificationResponse>>
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

        public async Task<IResult<GetUSerNotificationResponse>> Handle(GetUSerNotificationCommand request,
            CancellationToken cancellationToken)
        {
            if (string.IsNullOrEmpty(_currentUserService.AppUserId))
            {
                return await Result<GetUSerNotificationResponse>.FailAsync("Invalid user");
            }

            var userNotification =
                await _context.UserNotifications.FirstOrDefaultAsync(x => x.AppUserId == _currentUserService.AppUserId,
                    cancellationToken);
            if (userNotification == null)
            {
                return await Result<GetUSerNotificationResponse>.FailAsync("Notification does not exist for this user");
            }

            var result = _mapper.Map<GetUSerNotificationResponse>(userNotification);

            return await Result<GetUSerNotificationResponse>.SuccessAsync(result);
        }
    }
}