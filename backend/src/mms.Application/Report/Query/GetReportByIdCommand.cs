using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Report.Query
{
    public class GetReportByIdCommand : IRequest<IResult<GetReportsResponse>>
    {
        public string Id { get; set; }
    }
}
