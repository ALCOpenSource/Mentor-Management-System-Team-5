using mms.Domain.Entities;

namespace mms.Application.Common
{
    public static class Utilities
    {
        public static string GetUserFullName(AppUser user)
        {
            return user.FirstName + " " + user.LastName;
        }
    }
}