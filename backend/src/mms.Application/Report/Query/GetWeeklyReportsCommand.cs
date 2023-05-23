using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Report.Query
{
    public class GetWeeklyReportsCommand : IRequest<IResult<List<GetReportsResponse>>>
    {
    }
}
