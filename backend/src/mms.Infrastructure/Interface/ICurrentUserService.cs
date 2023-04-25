using mms.Domain.Entities;

namespace mms.Infrastructure.Interface
{
    public interface ICurrentUserService
    {
        string AppUserId { get; }
        string UserRole { get; }
        string UserEmail { get; }
        string UserPhoneNumber { get; set; }
        string FullName { get; }

        Task<AppUser> GetLoggedInUser();
    }
}