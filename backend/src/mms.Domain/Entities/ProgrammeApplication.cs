using System.ComponentModel.DataAnnotations.Schema;
using mms.Domain.Common;
using mms.Domain.Enums;

namespace mms.Domain.Entities
{
    public class ProgrammeApplication : BaseEntity
    {
        public string ProgrammeId { get; set; }
        public string AppUserId { get; set; }
        [Column(TypeName = "json")] public string Answers { get; set; }
        public ProgrammeApplicationStatus Status { get; set; }
        public string ApprovedDeclinedBy { get; set; }
    }
}