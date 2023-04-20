using Microsoft.Extensions.DependencyInjection;
using mms.Infrastructure.Implementation;
using mms.Infrastructure.Interface;

namespace mms.Infrastructure
{
    public static class InfrastructureInjection
    {
        public static void InjectInfrastructure(IServiceCollection services)
        {
            services.AddTransient<ITokenGeneratorService, TokenGeneratorService>();
            services.AddTransient<ICurrentUserService, CurrentUserService>();
            services.AddTransient<IMailService, MailService>();
        }
    }
}