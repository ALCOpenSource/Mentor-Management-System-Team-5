using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Application.UserNotification.Command.EditUserNotification
{
    public class EditUserNotificationCommandHandler : IRequestHandler<EditUserNotificationCommand, IResult>
    {
        private readonly ICurrentUserService _currentUserService;
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public EditUserNotificationCommandHandler(ICurrentUserService currentUserService, ApplicationContext context,
            IMapper mapper)
        {
            _currentUserService = currentUserService;
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult> Handle(EditUserNotificationCommand request, CancellationToken cancellationToken)
        {
            if (_currentUserService.AppUserId == Guid.Empty)
            {
                return await Result.FailAsync("Invalid user");
            }

            var userNotification =
                await _context.UserNotifications.FirstOrDefaultAsync(x => x.UserId == _currentUserService.AppUserId,
                    cancellationToken);
            if (userNotification == null)
            {
                return await Result.FailAsync("Notification does not exist for this user");
            }

            var entity = _mapper.Map(request, userNotification);

            _context.UserNotifications.Update(entity);
            await _context.SaveChangesAsync(cancellationToken);
            return await Result.SuccessAsync();
        }
    }
}