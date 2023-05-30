using mms.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mms.Application.Programme.Query
{
    public class GetProgrammeResponse
    {

        public string Name { get; set; }
        public string Description { get; set; }
        public string CreatedBy { get; set; }
        public string Status { get; set; }
        public string ArchivedBy { get; set; }
        public string ProgrammePicture { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime? DateCompleted { get; set; }
        public DateTime? DateArchived { get; set; }
        public string Criteria { get; set; }
    }
}
