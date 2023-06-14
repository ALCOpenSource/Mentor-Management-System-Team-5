using AspNetCoreHero.Results;
using MediatR;
using mms.Application.Account.ChangePassword;

namespace mms.Application.Message.Command.BroadcastMessage
{
    public class BroadcastMessageCommand : IRequest<IResult<List<CreateMessageResult>>>
    {
        public string Subject { get; set; }

        public string Body { get; set; }
        public List<BroadcastMessageDto> Messages { get; set; }
    }

    public class BroadcastMessageDto
    {
        public string ThreadId { get; set; }
        public string RecipientId { get; set; }
    }
}