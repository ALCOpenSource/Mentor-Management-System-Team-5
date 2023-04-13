using Microsoft.AspNetCore.Authorization;

namespace mms.Infrastructure.Policy
{
    public static class Policies
    {
        public static string Mentor = "Mentor";
        public static string Manager = "Manager";
        public static string Admin = "Admin";

        public static AuthorizationPolicy MentorPolicy()
        {
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser().RequireRole(Mentor).Build();
        }

        public static AuthorizationPolicy ManagerPolicy()
        {
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser().RequireRole(Manager).Build();
        }

        public static AuthorizationPolicy AdminPolicy()
        {
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser().RequireRole(Admin).Build();
        }
    }
}