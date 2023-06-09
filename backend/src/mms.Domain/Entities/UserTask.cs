using mms.Domain.Common;
using mms.Domain.Enums;
using System.ComponentModel.DataAnnotations.Schema;

namespace mms.Domain.Entities
{
    public class UserTask : BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DateCreated { get; set; }
        public string CreatedBy { get; set; }
        public UserTaskStatus Status { get; set; }
        public virtual IList<ProgramsMentor> Mentors { get; set; }
        public virtual IList<MentorManager> MentorManagers { get; set; }
        public virtual IList<Report> Reports { get; set; }
    }
}