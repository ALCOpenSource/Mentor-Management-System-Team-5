using mms.Domain.Common;

namespace mms.Domain.Entities
{
    public class MentorManager : BaseEntity
    {
        public string AppUserId { get; set; }
        public virtual IList<ProgramsMentor> ProgramsMentors { get; set; }
        public virtual IList<ProgramMentorManager> ProgramMentorManagers { get; set; }
        public AppUser AppUser { get; set; }
        public  virtual IList<UserTaskMentorManager> UserTaskMentorManagers { get; set; }
    }
}
