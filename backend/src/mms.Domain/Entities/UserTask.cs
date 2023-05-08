using mms.Domain.Common;

namespace mms.Domain.Entities
{
    public class UserTask : BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DateCreated { get; set; }
        public string CreatedBy { get; set; }
        public string Status { get; set; }
        public string ProgramId { get; set; }
        public IList<AppUser> Managers { get; set; }
        public Programme Programme { get; set; }
    }
}