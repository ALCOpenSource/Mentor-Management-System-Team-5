using System.Text.Json.Serialization;

namespace mms.Application.Message.Query.GetThread
{
    public class GetThreadMessagesResponse
    {
        public List<MessageThreadDto> OtherMessageThreads { get; set; }
        public List<MessageThreadDto> PinnedMessageThreads { get; set; }

        public GetThreadMessagesResponse()
        {
            OtherMessageThreads = new List<MessageThreadDto>();
            PinnedMessageThreads = new List<MessageThreadDto>();
        }
    }

    public class MessageThreadDto
    {
        public string ThreadId { get; set; }
        public string Subject { get; set; }
        public bool IsPinned { get; set; }
        public bool IsArchived { get; set; }
        public DateTime? PinnedDate { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public DateTime? LastReadTime { get; set; }
        public int UnReadMessageCount { get; set; }
        public string LastMessageId { get; set; }
        public bool IsDeleted { get; set; }

        public ThreadMessagesDto LastMessage { get; set; }
        public List<ThreadParticipantDto> ThreadParticipants { get; set; }

        public MessageThreadDto()
        {
            ThreadParticipants = new List<ThreadParticipantDto>();
        }
    }

    public class ThreadMessagesDto
    {
        public string MessageId { get; set; }
        public string SenderFirstName { get; set; }
        public string SenderLastName { get; set; }
        public string Body { get; set; }
        public bool IsMessageSentByUser { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

    public class ThreadParticipantDto
    {
        public string ParticipantId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string AppUserId { get; set; }
        public bool IsCurrentPerson { get; set; }
        public string ThreadId { get; set; }
    }
}