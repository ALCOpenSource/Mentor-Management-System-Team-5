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
        public DateTime DateCreated { get; set; }
        public string CreatedBy { get; set; }
        public string TaskId { get; set; }
        public string ProgramId { get; set; }

    }
}
