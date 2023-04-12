using mms.Domain.Common;

namespace mms.Domain.Entities
{
    public class Certificate : BaseEntity
    {
        public Guid UserId { get; set; }
        public Guid ProgramId { get; set; }
        public DateTime IssueDate { get; set; }
        public Guid CreatedBy { get; set; }
        public Guid ApprovedBy { get; set; }
        public string CertificateCode { get; set; }
        public string Status { get; set; }
    }
}