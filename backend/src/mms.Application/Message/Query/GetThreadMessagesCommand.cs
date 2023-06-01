using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Message.Query
{
    public class GetThreadMessagesCommand : IRequest<IResult<GetThreadMessagesResponse>>
    {
        public string ThreadId { get; set; }
    }
}