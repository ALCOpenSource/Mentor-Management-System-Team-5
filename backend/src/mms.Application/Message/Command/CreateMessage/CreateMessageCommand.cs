using AspNetCoreHero.Results;
using MediatR;
using mms.Application.Account.ChangePassword;

namespace mms.Application.Message.Command.CreateMessage
{
    public class CreateMessageCommand : IRequest<IResult<CreateMessageResult>>
    {
        public string AppUserId { get; set; }
        public string ThreadId { get; set; }
        public string RecipientId { get; set; }
        public string Body { get; set; }
        public string Subject { get; set; }
    }
}