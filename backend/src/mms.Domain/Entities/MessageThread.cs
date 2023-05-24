using mms.Domain.Common;
using System.ComponentModel.DataAnnotations;

namespace mms.Domain.Entities
{
    public class MessageThread : BaseEntity
    {
        [MaxLength(200)] public string Subject { get; set; }
        public string LastMessageId { get; set; }
        public string PinnedMessageId { get; set; }
        public bool IsDeleted { get; set; }
        public string MessageThreadParticipantHash { get; set; }
    }
}