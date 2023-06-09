using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Report.Command
{
    public class DeleteReportCommand : IRequest<IResult<string>>
    {
        public string Id { get; set; }
    }
}
