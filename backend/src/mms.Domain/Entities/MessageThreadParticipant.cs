using mms.Domain.Common;

namespace mms.Domain.Entities
{
    public class MessageThreadParticipant : BaseEntity
    {
        public string MessageThreadId { get; set; }
        public DateTime LastReadTime { get; set; }
        public virtual MessageThread MessageThread { get; set; }
        public string AppUserId { get; set; }
        public bool IsPinned { get; set; }
        public bool IsArchived { get; set; }
        public DateTime? PinnedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}