using mms.Domain.Common;

namespace mms.Domain.Entities
{
    public class ProgrammeApplication : BaseEntity
    {
        public Guid ProgrammeId { get; set; }
        public Guid UserId { get; set; }
        public string Answers { get; set; }
        public string Status { get; set; }
        public Guid ApprovedDeclinedBy { get; set; }
        public Programme Programme { get; set; }
        public AppUser User { get; set; }
    }
}