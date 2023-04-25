using System;
using System.Security.Claims;
using AspNetCoreHero.Results;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using mms.Application.Account.PasswordReset;
using mms.Domain.Entities;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Application.Account.ChangePassword
{
    public class ChangePasswordHandler : AccountBaseHandler, IRequestHandler<ChangePasswordCommand, Result<string>>
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public ChangePasswordHandler(UserManager<AppUser> userManager, IConfiguration configuration,
            ApplicationContext context, ITokenGeneratorService tokenGenerator,
            IHttpContextAccessor _httpContextAccessor) : base(userManager, configuration, tokenGenerator)
        {
            this._httpContextAccessor = _httpContextAccessor;
        }

        public async Task<Result<string>> Handle(ChangePasswordCommand request, CancellationToken cancellationToken)
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

                var result = await _userManager.ChangePasswordAsync(user, request.CurrentPassword, request.newPassword);
                if (!result.Succeeded)
                {
                    return await Result<string>.FailAsync(
                        "Failed while processing user password reset, kindly try again later.");
                }

                return await Result<string>.SuccessAsync("Password has been changed");
            }

            return await Result<string>.SuccessAsync("Password changed successfully");
        }
    }
}