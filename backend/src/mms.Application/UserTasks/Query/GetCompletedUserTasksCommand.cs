using AspNetCoreHero.Results;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mms.Application.UserTasks.Query
{
    public class GetCompletedUserTasksCommand : IRequest<IResult<List<GetUserTasksResponse>>>
    {
    }
}
