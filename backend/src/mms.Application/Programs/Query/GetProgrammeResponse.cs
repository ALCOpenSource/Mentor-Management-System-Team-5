using mms.Domain.Entities;

namespace mms.Application.Programme.Query
{
    public class GetProgrammeResponse
    {
        public string Id { get; set; }
        public DateTime CreatedAt { get; set; }
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
        public IList<mms.Domain.Entities.Report> Reports { get; set; }
        public IList<MentorManager> MentorManagers { get; set; }
        public IList<ProgramsMentor> Mentors { get; set; }
    }
}
