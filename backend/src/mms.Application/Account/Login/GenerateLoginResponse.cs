using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using mms.Application.Common;
using mms.Domain.Entities;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Application.Account.Login
{
    public class GenerateLoginResponse : AccountBaseHandler
    {
        private readonly ApplicationContext _context;

        public GenerateLoginResponse(UserManager<AppUser> userManager, IConfiguration configuration,
            ApplicationContext context, ITokenGeneratorService tokenGenerator) : base(userManager,
            configuration, tokenGenerator)
        {
            _context = context;
        }

        protected async Task<LoginResponseDto> GetLoginSuccessResponse(AppUser user)
        {
            var roles = await _userManager.GetRolesAsync(user);

            var result = new LoginResponseDto
            {
                Id = user.Id,
                Email = user.Email,
                FullName = Utilities.GetUserFullName(user),
                FirstName = user.FirstName,
                LastName = user.LastName,
                ProfilePicture = user.ProfilePicture,
                Token = await _tokenGeneratorService.GenerateTokenAsync(user),
                RefreshToken = await _tokenGeneratorService.GenerateRefreshTokenAsync(user),
                Roles = roles,
            };
            return result;
        }
    }
}