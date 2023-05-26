using System;
using AspNetCoreHero.Results;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using mms.Application.Account.Login;
using mms.Domain.Entities;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;
using mms.Infrastructure.Utility;

namespace mms.Application.Account.PasswordReset
{
    public class ForgetPasswordHandler : AccountBaseHandler,
        IRequestHandler<ForgetPasswordCommand, Result<ForgetPasswordResponseDto>>
    {
        public ForgetPasswordHandler(UserManager<AppUser> userManager, IConfiguration configuration,
            ApplicationContext context, ITokenGeneratorService tokenGeneratorService, IMailService mailService) : base(
            userManager, configuration,
            tokenGeneratorService, mailService)
        {
        }

        public async Task<Result<ForgetPasswordResponseDto>> Handle(ForgetPasswordCommand request,
            CancellationToken cancellationToken)
        {
            var user = await _userManager.FindByEmailAsync(request.Email);

            if (user == null)
            {
                return await Result<ForgetPasswordResponseDto>.FailAsync("User with this email does not exist.");
            }

            if (!user.EmailConfirmed)
            {
                return await Result<ForgetPasswordResponseDto>.FailAsync("Email not confirmed");
            }

            if (!user.IsActive)
            {
                return await Result<ForgetPasswordResponseDto>.FailAsync("Account not active");
            }

            string token = await _userManager.GeneratePasswordResetTokenAsync(user);
            var result = new ForgetPasswordResponseDto { Email = user.Email, Token = token };

            var encodedToken = TokenConverter.EncodeToken(token);
            var link = $"{_configuration["AppSettings:WebUrl"]}/reset-password?token={token}&email={user.Email}";
            var emailBody = await GetEmailBody(user, "StaticsFiles/Html/ForgetPasswordEmail.html", link, null);

            await SendEmail(user.Email, "Reset Password", emailBody);

            return await Result<ForgetPasswordResponseDto>.SuccessAsync(result);
        }
    }
}