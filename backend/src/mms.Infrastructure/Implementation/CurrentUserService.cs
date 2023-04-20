using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using mms.Domain.Entities;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Infrastructure.Implementation
{
    public class CurrentUserService : ICurrentUserService
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly ApplicationContext _context;

        public CurrentUserService(
            IHttpContextAccessor httpContextAccessor,
            UserManager<AppUser> userManager,
            ApplicationContext context)
        {
            AppUserId = httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.NameIdentifier);
            UserRole = httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.Role);
            UserEmail = httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.Email);
            FullName = httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.GivenName)
                       + " " + httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.Surname);
            UserPhoneNumber = httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.MobilePhone);
            _userManager = userManager;
            _context = context;
        }

        public string AppUserId { get; }
        public string UserRole { get; }
        public string UserEmail { get; }
        public string FullName { get; }
        public string UserPhoneNumber { get; set; }

        public async Task<AppUser> GetLoggedInUser()
        {
            return await _userManager.FindByIdAsync(userId: AppUserId.ToString());
        }
    }
}