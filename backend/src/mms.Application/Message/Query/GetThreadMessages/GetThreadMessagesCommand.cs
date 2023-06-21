using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Message.Query.GetThreadMessages
{
    public class GetThreadMessagesCommand : IRequest<IResult<GetThreadMessagesResponse>>
    {
        public string ThreadId { get; set; }
    }
}