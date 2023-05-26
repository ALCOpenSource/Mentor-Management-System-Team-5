using mms.Domain.Common;

namespace mms.Domain.Entities
{
    public class MentorManager : BaseEntity
    {
        public string AppUserId { get; set; }
        public IList<ProgramsMentor> ProgramsMentors { get; set; }
        public IList<Programme> Programmes { get; set; }
        public AppUser AppUser { get; set; }
        public IList<UserTask> UserTasks { get; set; }
    }
}
