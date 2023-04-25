using mms.Domain.Common;

namespace mms.Domain.Entities
{
    public class ProgrammeApplication : BaseEntity
    {
        public string ProgrammeId { get; set; }
        public string AppUserId { get; set; }
        public string Answers { get; set; }
        public string Status { get; set; }
        public string ApprovedDeclinedBy { get; set; }
        public Programme Programme { get; set; }
    }
}