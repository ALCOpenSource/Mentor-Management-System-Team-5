using mms.Domain.Entities;

namespace mms.Infrastructure.Interface
{
    public interface ICurrentUserService
    {
        Guid AppUserId { get; }
        string UserRole { get; }
        string UserEmail { get; }
        string UserPhoneNumber { get; set; }
        string FullName { get; }

        Task<AppUser> GetLoggedInUser();
    }
}