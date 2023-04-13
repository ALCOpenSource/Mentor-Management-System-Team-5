using Microsoft.Extensions.DependencyInjection;
using mms.Infrastructure.Implementation;
using mms.Infrastructure.Interface;

namespace mms.Infrastructure
{
    public class InfrastructureInjection
    {
        public static void InjectInfrastructure(IServiceCollection services)
        {
            services.AddTransient<ITokenGeneratorService, TokenGeneratorService>();
        }
    }
}