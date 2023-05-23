using mms.Domain.Common;

namespace mms.Domain.Entities
{
    public class ProgramsMentor : BaseEntity
    {
        public string ProgramId { get; set; }
        public string AppUserId { get; set; }
    }
}