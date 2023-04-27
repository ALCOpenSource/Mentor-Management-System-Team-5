using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using mms.Application.Profile.Command.UpdateProfile;
using mms.Domain.Entities;
using mms.Infrastructure.Interface;

namespace mms.Application.Profile
{
    public class ProfileBaseHandler
    {
        protected readonly UserManager<AppUser> _userManager;
        protected readonly IConfiguration _configuration;
        protected readonly ICurrentUserService _currentUserService;
        protected readonly IMapper _mapper;

        protected ProfileBaseHandler(UserManager<AppUser> userManager, IConfiguration configuration,
            ICurrentUserService currentUserService, IMapper mapper)
        {
            _userManager = userManager;
            _configuration = configuration;
            _currentUserService = currentUserService;
            _mapper = mapper;
        }

        protected async Task<AppUser?> FromUpdateProfileCommandToAppUser(UpdateProfileCommand command, AppUser user)
        {
            user.About = command.About;
            user.Bio = command.Bio;
            user.City = command.City;
            user.Country = command.Country;
            user.FirstName = command.FirstName;
            user.Github = command.Github;
            user.Instagram = command.Instagram;
            user.Headline = command.Headline;
            user.LastName = command.LastName;
            user.LinkedIn = command.LinkedIn;
            user.ProfilePicture = command.ProfilePicture;
            user.Twitter = command.Twitter;
            user.Website = command.Website;

            return user;
        }
    }
}