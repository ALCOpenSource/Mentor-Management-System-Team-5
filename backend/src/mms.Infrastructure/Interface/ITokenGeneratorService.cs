using mms.Domain.Entities;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace mms.Infrastructure.Interface
{
    public interface ITokenGeneratorService
    {
        Task<string> GenerateTokenAsync(AppUser user);

        Task<string> GenerateRefreshTokenAsync(AppUser user);

        ClaimsPrincipal GetPrincipalFromExpiredToken(string token);

        JwtSecurityToken ReadToken(string token);
    }
}