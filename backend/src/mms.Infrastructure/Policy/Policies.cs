using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mms.Infrastructure.Policy
{
    public static class Policies
    {
        public const string Mentor = "Mentor";
        public const string Manager = "Manager";
        public const string Admin = "Admin";

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