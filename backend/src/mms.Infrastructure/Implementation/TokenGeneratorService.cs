using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Security.Cryptography;
using System.Text;
using mms.Domain.Entities;
using mms.Infrastructure.Interface;

namespace mms.Infrastructure.Implementation
{
    public class TokenGeneratorService : ITokenGeneratorService
    {
        private readonly IConfiguration _configuration;
        private readonly UserManager<AppUser> _userManager;

        public TokenGeneratorService(IConfiguration configuration, UserManager<AppUser> userManager)
        {
            _configuration = configuration;
            _userManager = userManager;
        }

        /// <summary>
        /// Generates a bearer JWT token for a logged user which is used for Authorization
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public async Task<string> GenerateTokenAsync(AppUser user)
        {
            var authClaims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            if (!string.IsNullOrWhiteSpace(user.FirstName))
                authClaims.Add(new Claim(ClaimTypes.GivenName, user.FirstName));

            if (!string.IsNullOrWhiteSpace(user.FirstName))
                authClaims.Add(new Claim(ClaimTypes.Surname, user.LastName));

            if (!string.IsNullOrWhiteSpace(user.PhoneNumber))
                authClaims.Add(new Claim(ClaimTypes.MobilePhone, user.PhoneNumber));

            //Gets the roles of the logged in user and adds it to Claims
            var roles = await _userManager.GetRolesAsync(user);
            foreach (var role in roles)
            {
                authClaims.Add(new Claim(ClaimTypes.Role, role));
            }

            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtSettings:SecretKey"]));
            int.TryParse(_configuration["JwtSettings:TokenValidityInMinutes"], out var tokenValidityInMinutes);

            // Specifying JWTSecurityToken Parameters
            var token = new JwtSecurityToken
            (audience: _configuration["JwtSettings:Audience"],
                issuer: _configuration["JwtSettings:Issuer"],
                claims: authClaims,
                expires: DateTime.Now.AddMinutes(tokenValidityInMinutes),
                signingCredentials: new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256));

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public JwtSecurityToken ReadToken(string token)
        {
            return new JwtSecurityTokenHandler().ReadJwtToken(token);
        }

        public async Task<string> GenerateRefreshTokenAsync(AppUser user)
        {
            var randomNumber = new byte[64];
            using var rng = RandomNumberGenerator.Create();
            rng.GetBytes(randomNumber);
            var refreshToken = Convert.ToBase64String(randomNumber);

            int.TryParse(_configuration["JwtSettings:RefreshTokenValidityInDays"], out int refreshTokenValidityInDays);

            user.RefreshToken = refreshToken;
            user.RefreshTokenExpiryTime = DateTime.Now.AddDays(refreshTokenValidityInDays);

            await _userManager.UpdateAsync(user);

            return refreshToken;
        }

        public ClaimsPrincipal GetPrincipalFromExpiredToken(string token)
        {
            var tokenValidationParameters = new TokenValidationParameters()
            {
                ValidateAudience = false,
                ValidateIssuer = false,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey =
                    new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtSettings:SecretKey"])),
                ValidateLifetime = false
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var principal =
                tokenHandler.ValidateToken(token, tokenValidationParameters, out SecurityToken securityToken);
            if (securityToken is not JwtSecurityToken jwtSecurityToken ||
                !jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256,
                    StringComparison.InvariantCultureIgnoreCase))
            {
                throw new SecurityTokenException("Invalid token");
            }

            return principal;
        }
    }
}