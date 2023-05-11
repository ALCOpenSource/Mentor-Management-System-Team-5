using AspNetCoreHero.Results;
using MediatR;
using mms.Application.UserTasks.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mms.Application.Report.Query
{
    public class GetReportsCommand : IRequest<IResult<List<GetReportsResponse>>>
    {
    }
}
