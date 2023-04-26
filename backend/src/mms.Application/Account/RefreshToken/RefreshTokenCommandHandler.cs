using AspNetCoreHero.Results;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using mms.Domain.Entities;
using mms.Infrastructure.Interface;
using System.Security.Claims;

namespace mms.Application.Account.RefreshToken
{
    public class RefreshTokenCommandHandler : AccountBaseHandler,
        IRequestHandler<RefreshTokenCommand, Result<RefreshTokenResponse>>
    {
        public RefreshTokenCommandHandler
        (UserManager<AppUser> userManager,
            ITokenGeneratorService tokenGenerator,
            IConfiguration configuration)
            : base(userManager, configuration, tokenGenerator)
        {
        }

        public async Task<Result<RefreshTokenResponse>> Handle(RefreshTokenCommand request,
            CancellationToken cancellationToken)
        {
            var principal = _tokenGeneratorService.GetPrincipalFromExpiredToken(request.AccessToken);
            if (principal == null)
            {
                return await Result<RefreshTokenResponse>.FailAsync("Invalid access token or refresh token");
            }

            var userEmail = principal.Claims.Where(c => c.Type == ClaimTypes.Email).FirstOrDefault().Value;
            if (userEmail == null)
            {
                throw new Exception("User email not found in access token");
            }

            var user = await _userManager.FindByEmailAsync(userEmail);

            if (user == null)
            {
                throw new Exception("User not fouud");
            }

            if (user.RefreshToken != request.RefreshToken || user.RefreshTokenExpiryTime <= DateTime.Now)
            {
                return Result<RefreshTokenResponse>.Fail("Invalid or expired refresh token");
            }

            var result = new RefreshTokenResponse
            {
                RefreshToken = await _tokenGeneratorService.GenerateRefreshTokenAsync(user),
                AccessToken = await _tokenGeneratorService.GenerateTokenAsync(user)
            };

            return await Result<RefreshTokenResponse>.SuccessAsync(result, "Token Successfully Refreshed");
        }
    }
}