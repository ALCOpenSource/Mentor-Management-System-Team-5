using mms.Domain.Common;

namespace mms.Domain.Entities
{
    public class UserDetail : BaseEntity
    {
        public Guid UserId { get; set; }
        public Guid ManagerId { get; set; }
        public string PreviousHeldRole { get; set; }
        public string PreviousProgram { get; set; }
        public Guid ProgrammeOfInterestId { get; set; }
        public int YearOfTechnicalExperience { get; set; }
        public string Document { get; set; }
        public bool BeenMentorBefore { get; set; }
        public List<string> TechnicalProficiency { get; set; }
        public List<string> PreviousRoles { get; set; }
        public bool Status { get; set; }
        public bool Approved { get; set; }
    }
}