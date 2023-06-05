using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Programs.Command.DeleteProgram
{
    public class DeleteProgramCommand : IRequest<IResult<string>>
    {
        public string Id { get; set; }
    }
}
