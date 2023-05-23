using mms.Application.Common.DTOs;
using mms.Domain.Enums;

namespace mms.Application.UserTasks.Command.CreateTask
{
    public class UpdateUserTaskRequest
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public UserTaskStatus Status { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public string ProgramId { get; set; }
        public IList<MentorManagerDTO> Managers { get; set; }
        public IList<MentorDTO> Mentors { get; set; }
    }
}
