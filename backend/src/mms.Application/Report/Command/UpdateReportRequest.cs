using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mms.Application.Report.Command
{
    public class UpdateReportRequest
    {
        public string Type { get; set; }
        public string ReportTitle { get; set; }
        public string Achievements { get; set; }
        public string Blocker { get; set; }
        public string Recommendations { get; set; }
        public string TaskId { get; set; }
        public string ProgramId { get; set; }
    }
}
