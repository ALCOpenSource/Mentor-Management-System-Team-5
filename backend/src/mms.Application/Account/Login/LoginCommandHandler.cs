using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using mms.Domain.Entities;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Application.Account.Login
{
    public class LoginCommandHandler : GenerateLoginResponse, IRequestHandler<LoginCommand, Result<LoginResponseDto>>
    {
        public LoginCommandHandler(UserManager<AppUser> userManager, IConfiguration configuration,
            ApplicationContext context, ITokenGeneratorService tokenGenerator, IMailService mailService) : base(
            userManager, configuration,
            context, tokenGenerator, mailService)
        {
        }

        public async Task<Result<LoginResponseDto>> Handle(LoginCommand request, CancellationToken cancellationToken)
        {
            var user = await ValidateUser(request.Email, request.Password);

            if (user == null)
            {
                return await Result<LoginResponseDto>.FailAsync("Invalid credentials");
            }

            if (!user.EmailConfirmed)
            {
                return await Result<LoginResponseDto>.FailAsync("Email not confirmed");
            }

            if (!user.IsActive)
            {
                return await Result<LoginResponseDto>.FailAsync("Account not active");
            }

            var result = await GetLoginSuccessResponse(user);

            return await Result<LoginResponseDto>.SuccessAsync(result, "Login Successful");
        }
    }
}