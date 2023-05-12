using AspNetCoreHero.Results;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mms.Application.Report.Command
{
    public class PutReportCommand : IRequest<IResult<string>>
    {
        public string Id { get; set; }
        public string Type { get; set; }
        public string ReportTitle { get; set; }
        public string Achievements { get; set; }
        public string Blocker { get; set; }
        public string Recommendations { get; set; }
        public string TaskId { get; set; }
        public string ProgramId { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
