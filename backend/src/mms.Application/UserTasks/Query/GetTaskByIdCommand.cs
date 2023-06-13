using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.UserTasks.Query
{
    public class GetTaskByIdCommand : IRequest<IResult<GetUserTasksResponse>>
    {
        public string Id { get; set; }
    }
}
