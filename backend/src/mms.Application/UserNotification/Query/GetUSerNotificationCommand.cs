using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.UserNotification.Query
{
    public class GetUserNotificationCommand : IRequest<IResult<GetUserNotificationResponse>>
    {
    }
}