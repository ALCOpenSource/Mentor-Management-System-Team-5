using mms.Domain.Common;

namespace mms.Domain.Entities
{
    public class UserTaskMentorManager: BaseEntity
    {
        public string UserTaskId { get; set; }
        public virtual UserTask UserTask { get; set;}
        public string MentorManagerId { get; set; }
        public virtual MentorManager MentorManager { get; set; }
    }
}
