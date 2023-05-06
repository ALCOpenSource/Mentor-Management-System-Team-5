using AspNetCoreHero.Results;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using mms.Domain.Entities;
using mms.Infrastructure.Interface;
using mms.Infrastructure.Utility;

namespace mms.Application.Account.ConfirmEmail
{
    public class ConfirmEmailCommandHandler : AccountBaseHandler, IRequestHandler<ConfirmEmailCommand, IResult<string>>
    {
        public ConfirmEmailCommandHandler(UserManager<AppUser> userManager, IConfiguration configuration,
            ITokenGeneratorService tokenGeneratorService, IMailService mailService) : base(userManager, configuration,
            tokenGeneratorService, mailService)
        {
        }

        public async Task<IResult<string>> Handle(ConfirmEmailCommand request, CancellationToken cancellationToken)
        {
            var user = await _userManager.FindByEmailAsync(request.Email);
            if (user == null)
            {
                return Result<string>.Fail("User does not exist");
            }

            var decodedToken = TokenConverter.DecodeToken(request.EmailConfirmationToken);

            var purpose = UserManager<AppUser>.ConfirmEmailTokenPurpose;
            var tokenProvider = _userManager.Options.Tokens.EmailConfirmationTokenProvider;
            var token = await _userManager.VerifyUserTokenAsync(user, tokenProvider, purpose, decodedToken);
            if (!token)
            {
                return Result<string>.Fail("Invalid or expired token.");
            }

            var result = await _userManager.ConfirmEmailAsync(user, decodedToken);
            if (result.Succeeded)
            {
                user.IsActive = true;
                await _userManager.UpdateAsync(user);
                return Result<string>.Success($"{user.Email} successfully confirmed");
            }

            return Result<string>.Fail("Email confirmation not successful, kindly contact support if issue persists");
        }
    }
}