using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Application.UserNotification.Command.EditUserNotification;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Application.UserPrivacy.Command.EditUserPrivacy
{
    public class EditUserPrivacyCommandHandler : IRequestHandler<EditUserPrivacyCommand, IResult>
    {
        private readonly ICurrentUserService _currentUserService;
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public EditUserPrivacyCommandHandler(ICurrentUserService currentUserService, ApplicationContext context,
            IMapper mapper)
        {
            _currentUserService = currentUserService;
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult> Handle(EditUserPrivacyCommand request, CancellationToken cancellationToken)
        {
            if (string.IsNullOrEmpty(_currentUserService.AppUserId))
            {
                return await Result.FailAsync("Invalid user");
            }

            var userPrivacy =
                await _context.UserPrivacy.FirstOrDefaultAsync(x => x.AppUserId == _currentUserService.AppUserId,
                    cancellationToken);
            if (userPrivacy == null)
            {
                return await Result.FailAsync("Notification does not exist for this user");
            }

            var entity = _mapper.Map(request, userPrivacy);

            _context.UserPrivacy.Update(entity);
            await _context.SaveChangesAsync(cancellationToken);
            return await Result.SuccessAsync();
        }
    }
}