using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Message.Query.GetThread
{
    public class GetThreadCommand : IRequest<IResult<GetThreadMessagesResponse>>
    {
    }
}