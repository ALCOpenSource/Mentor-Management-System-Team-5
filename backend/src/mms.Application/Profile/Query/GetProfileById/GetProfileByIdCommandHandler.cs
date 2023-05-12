using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using mms.Domain.Entities;
using mms.Infrastructure.Interface;

namespace mms.Application.Profile.Query.GetProfileById
{
    public class GetProfileByIdCommandHandler : ProfileBaseHandler,
        IRequestHandler<GetProfileByIdCommand, Result<GetProfileByIdResponse>>
    {
        public GetProfileByIdCommandHandler(UserManager<AppUser> userManager, IConfiguration configuration,
            ICurrentUserService currentUserService, IMapper mapper) : base(userManager, configuration,
            currentUserService, mapper)
        {
        }

        public async Task<Result<GetProfileByIdResponse>> Handle(GetProfileByIdCommand request,
            CancellationToken cancellationToken)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Id == _currentUserService.AppUserId,
                cancellationToken);
            if (user == null)
            {
                return await Result<GetProfileByIdResponse>.FailAsync("User does not exist");
            }

            var roles = await _userManager.GetRolesAsync(user);

            var userResult = _mapper.Map<GetProfileByIdResponse>(user);
            userResult.Roles = roles;

            return await Result<GetProfileByIdResponse>.SuccessAsync(userResult);
        }
    }
}