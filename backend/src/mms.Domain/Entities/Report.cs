using mms.Domain.Common;

namespace mms.Domain.Entities
{
    public class Report : BaseEntity
    {
        public string Type { get; set; }
        public string ReportTitle { get; set; }
        public string Achievements { get; set; }
        public string Blocker { get; set; }
        public string Recommendations { get; set; }
        public DateTime DateCreated { get; set; }
        public Guid CreatedBy { get; set; }
        public Guid TaskId { get; set; }
        public Guid ProgramId { get; set; }
    }
}