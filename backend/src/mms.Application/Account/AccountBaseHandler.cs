using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using mms.Application.Account.Profile;
using mms.Domain.Entities;
using mms.Infrastructure.Interface;

namespace mms.Application.Account
{
    public abstract class AccountBaseHandler
    {
        protected readonly UserManager<AppUser> _userManager;
        protected readonly IConfiguration _configuration;
        protected readonly ITokenGeneratorService _tokenGeneratorService;

        protected AccountBaseHandler(UserManager<AppUser> userManager, IConfiguration configuration,
            ITokenGeneratorService tokenGeneratorService)
        {
            _userManager = userManager;
            _configuration = configuration;
            _tokenGeneratorService = tokenGeneratorService;
        }

        protected async Task<AppUser?> ValidateUser(string email, string password)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null || !await _userManager.CheckPasswordAsync(user, password))
            {
                return default;
            }

            return await _userManager.Users
                .FirstOrDefaultAsync(x => x.Id == user.Id);
        }

        protected async Task<AppUser?> FromUpdateProfileCommandToAppUser(UpdateProfileCommand command, string email)
        {
            var user = await _userManager.FindByEmailAsync(email);

            user.About = command.About;
            user.Bio = command.Bio;
            user.City = command.City;
            user.Country = command.Country;
            user.FirstName = command.Firtname;
            user.GitHub = command.GitHub;
            user.Headline = command.Headline;
            user.LastName = command.Lastname;
            user.LinkedIn = command.LinkedIn;
            user.ProfilePicture = command.ProfilePicture;
            user.Twitter = command.Twitter;
            user.Website = command.Website;

            return user;
        }
    }
}