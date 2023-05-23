using mms.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mms.Application.Common.DTOs
{
    public class ReportDTO
    {
        public string Id { get; set; }
        public string Type { get; set; }
        public string ReportTitle { get; set; }
        public string Achievements { get; set; }
        public string Blocker { get; set; }
        public string Recommendations { get; set; }
        public string CreatedBy { get; set; }
        public string UserTaskId { get; set; }
        public string ProgramId { get; set; }
    }
}
