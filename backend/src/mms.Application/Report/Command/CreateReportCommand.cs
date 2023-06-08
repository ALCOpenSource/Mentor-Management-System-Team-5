using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Report.Command
{
    public class CreateReportCommand : IRequest<IResult>
    {
        public string Type { get; set; }
        public string ReportTitle { get; set; }
        public string Achievements { get; set; }
        public string Blocker { get; set; }
        public string Recommendations { get; set; }
        public string UserTaskId { get; set; }
        public string ProgramId { get; set; }

    }
}
