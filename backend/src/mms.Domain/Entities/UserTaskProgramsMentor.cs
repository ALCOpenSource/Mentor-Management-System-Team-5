using mms.Domain.Common;

namespace mms.Domain.Entities
{
    public class UserTaskProgramsMentor: BaseEntity
    {
        public string UserTaskId { get; set; }
        public virtual UserTask UserTask { get; set; }
        public string ProgramsMentorId { get; set; }
        public virtual ProgramsMentor ProgramsMentor { get; set; }
    }
}
