using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.UserTasks.Query
{
    public class GetUserTasksCommand : IRequest<IResult<List<GetUserTasksResponse>>>
    {
    }
}
