namespace mms.Application.Message.Query
{
    public class GetThreadMessagesResponse
    {
        public GetThreadMessagesResponse()
        {
            OtherMessages = new List<ThreadMessagesDto>();
        }

        public string ThreadId { get; set; }
        public ThreadMessagesDto PinnedMessage { get; set; }
        public List<ThreadMessagesDto> OtherMessages { get; set; }
    }

    public class ThreadMessagesDto
    {
        public string Id { get; set; }
        public string SenderFirstName { get; set; }
        public string SenderLastName { get; set; }
        public string Body { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public string SenderId { get; set; }
    }
}