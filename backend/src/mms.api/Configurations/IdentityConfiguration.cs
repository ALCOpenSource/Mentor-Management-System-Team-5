using Microsoft.AspNetCore.Identity;
using mms.Domain.Entities;
using mms.Infrastructure.Context;

namespace mms.api.Configurations
{
    public static class IdentityConfiguration
    {
        public static void ConfigureIdentity(IServiceCollection services)
        {
            // Add identity services
            services.AddIdentity<AppUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationContext>()
                .AddDefaultTokenProviders();

            // Register UserManager for dependency injection
            services.AddScoped<UserManager<AppUser>>();
        }
    }
}