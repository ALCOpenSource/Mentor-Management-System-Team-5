using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using mms.Domain.Entities;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;
using System.Data;
using mms.Application.Common;
using mms.Domain.Common;

namespace mms.Application.Account.Login
{
    public class GenerateLoginResponse : AccountBaseHandler
    {
        protected readonly ITokenGeneratorService _tokenGenerator;
        private readonly ApplicationContext _context;

        public GenerateLoginResponse(UserManager<AppUser> userManager, IConfiguration configuration,
            ApplicationContext context, ITokenGeneratorService tokenGenerator) : base(userManager,
            configuration)
        {
            _context = context;
            _tokenGenerator = tokenGenerator;
        }

        protected async Task<LoginResponseDto> GetLoginSuccessResponse(AppUser user)
        {
            var roles = await _userManager.GetRolesAsync(user);

            var result = new LoginResponseDto
            {
                Id = user.Id,
                Email = user.Email,
                FullName = Utilities.GetUserFullName(user),
                Token = await _tokenGenerator.GenerateTokenAsync(user),
                RefreshToken = await _tokenGenerator.GenerateRefreshTokenAsync(user),
                Roles = roles,
            };
            return result;
        }
    }
}