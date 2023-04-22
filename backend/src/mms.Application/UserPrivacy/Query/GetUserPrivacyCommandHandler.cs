using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Application.UserPrivacy.Query
{
    public class GetUserPrivacyCommandHandler : IRequestHandler<GetUserPrivacyCommand,
        IResult<GetUserPrivacyResponse>>
    {
        private readonly ICurrentUserService _currentUserService;
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetUserPrivacyCommandHandler(ICurrentUserService currentUserService, ApplicationContext context,
            IMapper mapper)
        {
            _currentUserService = currentUserService;
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<GetUserPrivacyResponse>> Handle(GetUserPrivacyCommand request,
            CancellationToken cancellationToken)
        {
            if (string.IsNullOrEmpty(_currentUserService.AppUserId))
            {
                return await Result<GetUserPrivacyResponse>.FailAsync("Invalid user");
            }

            var userPrivacy =
                await _context.UserPrivacy.FirstOrDefaultAsync(x => x.AppUserId == _currentUserService.AppUserId,
                    cancellationToken);
            if (userPrivacy == null)
            {
                return await Result<GetUserPrivacyResponse>.FailAsync("Notification does not exist for this user");
            }

            var result = _mapper.Map<GetUserPrivacyResponse>(userPrivacy);

            return await Result<GetUserPrivacyResponse>.SuccessAsync(result);
        }
    }
}