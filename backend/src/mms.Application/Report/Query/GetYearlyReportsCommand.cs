using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Report.Query
{
    public class GetYearlyReportsCommand : IRequest<IResult<List<GetReportsResponse>>>
    {
    }
}
