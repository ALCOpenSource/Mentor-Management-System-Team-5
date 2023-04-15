using System.ComponentModel.DataAnnotations.Schema;
using mms.Domain.Common;

namespace mms.Domain.Entities
{
    public class UserDetail : BaseEntity
    {
        public Guid AppUserId { get; set; }
        public string PreviousHeldRole { get; set; }
        public string PreviousProgram { get; set; }
        public Guid ProgrammeOfInterestId { get; set; }
        public int YearOfTechnicalExperience { get; set; }
        public string Document { get; set; }
        public bool BeenMentorBefore { get; set; }
        [NotMapped] public string[] TechnicalProficiency { get; set; }
        [NotMapped] public string[] PreviousRoles { get; set; }
        public bool Status { get; set; }
        public bool Approved { get; set; }
    }
}