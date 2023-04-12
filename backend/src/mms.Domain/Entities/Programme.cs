using mms.Domain.Common;

namespace mms.Domain.Entities
{
    public class Programme : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public Guid CreatedBy { get; set; }
        public string Status { get; set; }
        public Guid ArchivedBy { get; set; }
        public string ProgrammePicture { get; set; }
        public IList<UserTask> UserTasks { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime? DateCompleted { get; set; }
        public DateTime? DateArchived { get; set; }
        public string Criteria { get; set; }
        public IList<Report> Reports { get; set; }
        public IList<ProgramsMentor> ProgramsMentors { get; set; }
        public IList<ProgrammeApplication> ProgrammeApplications { get; set; }
    }
}