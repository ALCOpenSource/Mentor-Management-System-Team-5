using mms.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mms.Domain.Entities
{
    public class ProgramMentorManager: BaseEntity
    {
        public string ProgramId { get; set; }
        public Program Program { get; set; }
        public string MentorManagerId { get; set; }
        public MentorManager MentorManager { get; set; }
    }
}
