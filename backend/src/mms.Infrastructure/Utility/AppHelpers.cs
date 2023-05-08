using RazorLight;
using System.Reflection;
using mms.Domain.Enums;

namespace mms.Infrastructure.Utility
{
    public static class AppHelpers
    {
        public static async Task<string> ParseTemplate<T>(T model, string content)
        {
            var ex = Assembly.GetExecutingAssembly();
            var engine = new RazorLightEngineBuilder()
                .UseEmbeddedResourcesProject(model.GetType())
                .SetOperatingAssembly(ex)
                .UseMemoryCachingProvider()
                .Build();

            return await engine.CompileRenderStringAsync(Guid.NewGuid().ToString(), content, model);
        }

        public static async Task<string> ReadFromFile(string badeDir, string emailTempPath)
        {
            return await File.ReadAllTextAsync(Path.Combine(badeDir, emailTempPath));
        }

        public static string GetTemplateName(EmailTemplate template)
        {
            return $"EmailTemplates/{template}.cshtml";
        }
    }
}