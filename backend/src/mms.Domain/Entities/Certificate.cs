using mms.Domain.Common;
using mms.Domain.Enums;

namespace mms.Domain.Entities
{
    public class Certificate : BaseEntity
    {
        public string AppUserId { get; set; }
        public string ProgramId { get; set; }
        public DateTime IssueDate { get; set; }
        public string CreatedBy { get; set; }
        public string ApprovedBy { get; set; }
        public string CertificateCode { get; set; }
        public CertificateStatus Status { get; set; }
    }
}