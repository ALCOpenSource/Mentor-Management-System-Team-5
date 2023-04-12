using mms.Domain.Common;

namespace mms.Domain.Entities
{
    public class ProgramsMentor : BaseEntity
    {
        public Guid ProgramId { get; set; }
        public Guid AppUserId { get; set; }
        public Programme Programme { get; set; }
        public AppUser AppUser { get; set; }
    }
}