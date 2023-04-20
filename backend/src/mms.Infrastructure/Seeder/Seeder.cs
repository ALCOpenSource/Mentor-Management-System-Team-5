using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using mms.Domain.Entities;
using mms.Infrastructure.Context;
using mms.Infrastructure.Policy;

namespace mms.Infrastructure.Seeder
{
    public static class Seeder
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
                    List<AppUser> users = new();
                    List<UserNotification> usersNotifications = new();
                    var user1 = new AppUser
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
                        About = "I am just my simple self",
                        State = "Lagos",
                    };

                    var user = new AppUser
                    {
                        About = "I am just my simple self",
                        Id = Guid.NewGuid().ToString(),
                        FirstName = "Samuel",
                        LastName = "Kebede",
                        IsActive = true,
                        DateCreated = DateTime.Now,
                        Email = "samuelkebede2000@gmail.com",
                        EmailConfirmed = true,
                        UserName = "Andela",
                        Country = "Nigeria",
                        City = "Lagos",
                        State = "Lagos"
                    };

                    var user2 = new AppUser
                    {
                        Id = Guid.NewGuid().ToString(),
                        FirstName = "Temitope",
                        LastName = "Doe",
                        IsActive = true,
                        DateCreated = DateTime.Now,
                        Email = "tamsay2017@gmail.com",
                        EmailConfirmed = true,
                        UserName = "Andela",
                        Country = "Nigeria",
                        City = "Lagos",
                        About = "I am just my simple self",
                        State = "Lagos"
                    };


                    users.Add(user);
                    users.Add(user1);
                    users.Add(user2);

                    usersNotifications.Add(new UserNotification()
                    {
                        Id = Guid.NewGuid().ToString(),
                        AppUserId = user.Id,
                    });

                    usersNotifications.Add(new UserNotification()
                    {
                        Id = Guid.NewGuid().ToString(),
                        AppUserId = user1.Id,
                    });

                    usersNotifications.Add(new UserNotification()
                    {
                        Id = Guid.NewGuid().ToString(),
                        AppUserId = user2.Id,
                    });

                    foreach (AppUser appUser in users)
                    {
                        await userManager.CreateAsync(appUser, Password);
                        await userManager.AddToRoleAsync(appUser, Policies.Admin);
                    }

                    await context.UserNotifications.AddRangeAsync(usersNotifications);
                    await context.SaveChangesAsync();
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