using AspNetCoreHero.Results;
using MediatR;
using mms.Application.Common.DTOs.Mentors;
using mms.Domain.Enums;

namespace mms.Application.UserTasks.Command.UpdateTask
{
    public class PutUserTaskCommand : IRequest<IResult<string>>
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DateCreated { get; set; }
        public string CreatedBy { get; set; }
        public UserTaskStatus Status { get; set; }
        public DateTime UpdatedAt { get; set; }
        public IList<MentorManagerDTO> Managers { get; set; }
        public IList<MentorDTO> Mentors { get; set; }

    }
}
