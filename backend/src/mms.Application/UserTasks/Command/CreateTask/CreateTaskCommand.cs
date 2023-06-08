using AspNetCoreHero.Results;
using MediatR;
using mms.Application.Common.DTOs.Mentors;
using mms.Domain.Enums;

namespace mms.Application.UserTasks.Command.CreateTask
{
    public class CreateTaskCommand: IRequest<IResult<string>>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public UserTaskStatus Status { get; set; }
        public IList<MentorManagerDTO> Managers { get; set; }
        public IList<MentorDTO> Mentors { get; set; }
    }
}
