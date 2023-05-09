using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Report.Query
{
    public class GetMonthlyReportsCommand : IRequest<IResult<List<GetReportsResponse>>>
    {
    }
}
