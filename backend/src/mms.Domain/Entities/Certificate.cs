using mms.Domain.Common;

namespace mms.Domain.Entities
{
    public class Certificate : BaseEntity
    {
        public string UserId { get; set; }
        public string ProgramId { get; set; }
        public DateTime IssueDate { get; set; }
        public string CreatedBy { get; set; }
        public string ApprovedBy { get; set; }
        public string CertificateCode { get; set; }
        public string Status { get; set; }
    }
}