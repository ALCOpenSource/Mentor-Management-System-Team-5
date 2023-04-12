using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using mms.Domain.Entities;
using mms.Infrastructure.Context;
using mms.Infrastructure.Policy;

namespace mms.Infrastructure.Seeder
{
    public class Seeder
    {
        private const string Password = "Password@123";

        public static async Task SeedData(IApplicationBuilder app)
        {
            using var serviceScope = app.ApplicationServices.CreateScope();
            await SeederRun(
                (UserManager<AppUser>)serviceScope.ServiceProvider.GetService(typeof(UserManager<AppUser>)),
                serviceScope.ServiceProvider.GetService<ApplicationContext>(),
                (RoleManager<IdentityRole>)serviceScope.ServiceProvider.GetService(typeof(RoleManager<IdentityRole>))
            );
        }

        private static async Task SeederRun(UserManager<AppUser> userManager, ApplicationContext context,
            RoleManager<IdentityRole> roleManager)
        {
            try
            {
                await context.Database.EnsureCreatedAsync();

                await roleManager.CreateAsync(new IdentityRole { Name = Policies.Mentor });
                await roleManager.CreateAsync(new IdentityRole { Name = Policies.Manager });
                await roleManager.CreateAsync(new IdentityRole { Name = Policies.Admin });

                if (!context.Users.Any())
                {
                    var user = new AppUser()
                    {
                        Id = Guid.NewGuid().ToString(),
                        FirstName = "John",
                        LastName = "Doe",
                        IsActive = true,
                        DateCreated = DateTime.Now,
                        Email = "example@gmail.com",
                        EmailConfirmed = true,
                        UserName = "Andela",
                        Country = "Nigeria",
                        City = "Lagos",
                        State = "Lagos"
                    };

                    await userManager.CreateAsync(user, Password);
                    await userManager.AddToRoleAsync(user, Policies.Admin);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
}