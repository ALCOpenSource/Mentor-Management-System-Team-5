using mms.Domain.Common;

namespace mms.Domain.Entities
{
    public class ProgramsMentor : BaseEntity
    {
        public Guid ProgramId { get; set; }
        public Guid UserId { get; set; }
        public Programme Programme { get; set; }
        public AppUser User { get; set; }
    }
}