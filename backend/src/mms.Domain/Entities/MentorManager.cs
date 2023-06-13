using mms.Domain.Common;

namespace mms.Domain.Entities
{
    public class MentorManager : BaseEntity
    {
        public string AppUserId { get; set; }
        public virtual IList<ProgramsMentor> ProgramsMentors { get; set; }
        public virtual IList<Program> Programs { get; set; }
        public AppUser AppUser { get; set; }
        public virtual IList<UserTask> UserTasks { get; set; }
    }
}
