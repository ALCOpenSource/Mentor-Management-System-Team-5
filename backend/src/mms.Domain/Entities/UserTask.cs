using mms.Domain.Common;
using mms.Domain.Enums;

namespace mms.Domain.Entities
{
    public class UserTask : BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DateCreated { get; set; }
        public string CreatedBy { get; set; }
        public UserTaskStatus Status { get; set; }
        public string ProgramId { get; set; }
        public string AppUserId { get; set; }
        public IList<AppUser> AppUsers { get; set; } //Managers and Mentors only
        public IList<Report> Reports { get; set; }
    }
}