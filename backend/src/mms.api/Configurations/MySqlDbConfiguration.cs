using System.ComponentModel;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;

namespace mms.api.Configurations
{
    public static class MySqlDbConfiguration
    {
        private static IConfiguration _configuration;

        public static void Configure(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public static void ConfigureContainer(IServiceCollection services)
        {
            var connectionString = _configuration.GetConnectionString("ApplicationContext");

            var serverVersion = new MySqlServerVersion(new Version(8, 0, 32));

            services.AddEntityFrameworkMySql()
                .AddDbContext<ApplicationContext>((provider, builder) =>
                        builder.UseMySql(connectionString, serverVersion)
                            .EnableDetailedErrors()
                            .EnableSensitiveDataLogging()
                            .UseLoggerFactory(provider.GetRequiredService<ILoggerFactory>())
                    , ServiceLifetime.Transient);
        }
    }
}