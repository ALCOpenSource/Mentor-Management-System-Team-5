using AspNetCoreHero.Results;
using MediatR;
using mms.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mms.Application.Programme.Command
{
    public class CreateProgrammeCommand : IRequest<IResult>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string CreatedBy { get; set; }
        public string Status { get; set; }
        public string ArchivedBy { get; set; }
        public string ProgrammePicture { get; set; }
        public IList<UserTask> UserTasks { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime? DateCompleted { get; set; }
        public DateTime? DateArchived { get; set; }
        public string Criteria { get; set; }
        public IList<mms.Domain.Entities.Report> Reports { get; set; }
        public IList<ProgramsMentor> ProgramsMentors { get; set; }
        public IList<ProgrammeApplication> ProgrammeApplications { get; set; }
    }
}
