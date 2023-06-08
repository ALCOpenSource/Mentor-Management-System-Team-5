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
        public string CreatedBy { get; set; }
        public string UserTaskId { get; set; }
        public UserTask UserTask { get; set; }
        public string ProgramId { get; set; }
        public Program Program { get; set; }
    }
}