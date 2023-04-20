using FluentValidation;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using mms.Application.Common.Mapper;
using System.Reflection;

namespace mms.Application
{
    public static class ApplicationInjection
    {
        public static void ApplicationDiContainer(IServiceCollection services)
        {
            services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()));
            services.AddAutoMapper(typeof(AutoMapperInitializer));
        }
    }
}