using AspNetCoreHero.Results;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using mms.Application.Account;
using mms.Domain.Entities;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;
using System.Security.Claims;

namespace mms.Application.Profile.Command.UpdateProfile
{
    public class UpdateProfileHandler : AccountBaseHandler, IRequestHandler<UpdateProfileCommand, Result<string>>
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public UpdateProfileHandler(UserManager<AppUser> userManager, IConfiguration configuration,
            ApplicationContext context, ITokenGeneratorService tokenGenerator,
            IHttpContextAccessor _httpContextAccessor) : base(userManager, configuration, tokenGenerator)
        {
            this._httpContextAccessor = _httpContextAccessor;
        }

        public async Task<Result<string>> Handle(UpdateProfileCommand request, CancellationToken cancellationToken)
        {
            string? userEmail = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.Email).Value;

            if (userEmail != null)
            {
                var user = await _userManager.FindByEmailAsync(userEmail);

                if (user == null)
                {
                    return await Result<string>.FailAsync("User with this email does not exist.");
                }

                if (!user.EmailConfirmed)
                {
                    return await Result<string>.FailAsync("Email not confirmed");
                }

                if (!user.IsActive)
                {
                    return await Result<string>.FailAsync("Account not active");
                }

                AppUser? updateUser = await FromUpdateProfileCommandToAppUser(request, userEmail);
                await _userManager.UpdateAsync(updateUser!);

                return await Result<string>.SuccessAsync("Successfully Update Profile");
            }

            return await Result<string>.FailAsync("Email does not exist");
        }
    }
}