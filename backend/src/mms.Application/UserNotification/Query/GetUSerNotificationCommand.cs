using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.UserNotification.Query
{
    internal class GetUSerNotificationCommand : IRequest<IResult<GetUSerNotificationResponse>>
    {
    }
}