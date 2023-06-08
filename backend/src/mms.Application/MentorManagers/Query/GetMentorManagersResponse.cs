using mms.Domain.Entities;
using ProgrammeEntity = mms.Domain.Entities.Program;

namespace mms.Application.MentorManagers.Query
{
    public class GetMentorManagersResponse
    {
        public string ProgramsMentorId { get; set; }
        public string AppUserId { get; set; }
        public string ProgramId { get; set; }
        public ProgramsMentor ProgramsMentor { get; set; }
        public ProgrammeEntity Programme { get; set; }
        public AppUser AppUser { get; set; }
    }
}
