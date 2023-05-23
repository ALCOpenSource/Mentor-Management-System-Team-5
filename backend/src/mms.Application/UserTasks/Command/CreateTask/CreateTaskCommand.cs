using AspNetCoreHero.Results;
using MediatR;
using mms.Application.Common.DTOs;
using mms.Domain.Enums;

namespace mms.Application.UserTasks.Command.CreateTask
{
    public class CreateTaskCommand: IRequest<IResult<string>>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string CreatedBy { get; set; }
        public UserTaskStatus Status { get; set; }
        public string ProgramId { get; set; }
        public IList<MentorManagerDTO> Managers { get; set; }
        public IList<MentorDTO> Mentors { get; set; }
    }
}
