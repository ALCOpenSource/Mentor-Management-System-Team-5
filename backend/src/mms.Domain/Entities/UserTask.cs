using mms.Domain.Common;

namespace mms.Domain.Entities
{
    public class UserTask : BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DateCreated { get; set; }
        public Guid CreatedBy { get; set; }
        public string Status { get; set; }
        public Guid ProgramId { get; set; }
        public IList<AppUser> Managers { get; set; }
    }
}