using AspNetCoreHero.Results;
using MediatR;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using mms.Application.Common.DTOs.Mentors;
using mms.Domain.Enums;
using System.ComponentModel.DataAnnotations.Schema;

namespace mms.Application.Programs.Command.UpdateTask
{
    public class PutProgramCommand : IRequest<IResult<string>>
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string CreatedBy { get; set; }
        public ProgramStatus Status { get; set; }
        public string ArchivedBy { get; set; }
        public string ProgrammePicture { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime? DateCompleted { get; set; }
        public DateTime? DateArchived { get; set; }
        [Column(TypeName = "json")]
        public string Criteria { get; set; }
        public DateTime UpdatedAt { get; set; }
        public IList<MentorManagerDTO> Managers { get; set; }
        public IList<MentorDTO> Mentors { get; set; }
    }
}
