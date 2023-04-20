using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.UserNotification.Query
{
    public class GetUSerNotificationCommand : IRequest<IResult<GetUSerNotificationResponse>>
    {
    }
}