using mms.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProgrammEntity = mms.Domain.Entities.Programme;

namespace mms.Application.Mentors.Query
{
    public class GetMentorsResponse
    {
        public string ProgramId { get; set; }
        public string AppUserId { get; set; }
        public ProgrammEntity Programme { get; set; }
        public AppUser AppUser { get; set; }
    }
}
