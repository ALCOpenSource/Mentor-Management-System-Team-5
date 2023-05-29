using System;
using AspNetCoreHero.Results;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using mms.Domain.Entities;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;
using mms.Infrastructure.Utility;

namespace mms.Application.Account.PasswordReset
{
    public class ResetPasswordHandler : AccountBaseHandler, IRequestHandler<ResetPassword, Result<string>>
    {
        public ResetPasswordHandler(UserManager<AppUser> userManager, IConfiguration configuration,
            ApplicationContext context, ITokenGeneratorService tokenGenerator, IMailService mailService) : base(
            userManager, configuration,
            tokenGenerator, mailService)
        {
        }

        public async Task<Result<string>> Handle(ResetPassword request, CancellationToken cancellationToken)
        {
            var user = await _userManager.FindByEmailAsync(request.Email);

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

            var decodedToken = TokenConverter.DecodeToken(request.Token);
            var result = await _userManager.ResetPasswordAsync(user, decodedToken, request.Password);
            if (!result.Succeeded)
            {
                return await Result<string>.FailAsync(
                    "Failed while processing user password reset, kindly try again later.");
            }

            return await Result<string>.SuccessAsync("Password has been changed");
        }
    }
}