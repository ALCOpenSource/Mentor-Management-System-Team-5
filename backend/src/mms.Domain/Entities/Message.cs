using mms.Domain.Common;

namespace mms.Domain.Entities
{
    public class Message : BaseEntity
    {
        public string MessageThreadId { get; set; }
        public string SenderId { get; set; }
        public string Body { get; set; }
        public bool IsDeleted { get; set; }
    }
}