using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Programme.Query
{
    public class GetProgrammesCommand : IRequest<IResult<List<GetProgrammeResponse>>>
    {
    }
}
