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
        IRequestHandler<GetProfileByIdCommand, Result<GetProfileByIResponse>>
    {
        protected GetProfileByIdCommandHandler(UserManager<AppUser> userManager, IConfiguration configuration,
            ICurrentUserService currentUserService, IMapper mapper) : base(userManager, configuration,
            currentUserService)
        {
        }

        public async Task<Result<GetProfileByIResponse>> Handle(GetProfileByIdCommand request,
            CancellationToken cancellationToken)
        {
            var user = _userManager.Users.FirstOrDefaultAsync(x => x.Id == _currentUserService.AppUserId,
                cancellationToken);
            if (user == null)
            {
                return await Result<GetProfileByIResponse>.FailAsync("User does not exist");
            }
        }
    }
}