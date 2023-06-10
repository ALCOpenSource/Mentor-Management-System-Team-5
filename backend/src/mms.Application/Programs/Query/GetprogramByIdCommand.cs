using AspNetCoreHero.Results;
using MediatR;
using mms.Application.Programme.Query;

namespace mms.Application.Programs.Query
{
    public class GetprogramByIdCommand : IRequest<IResult<GetProgrammeResponse>>
    {
        public string Id { get; set; }
    }
}
