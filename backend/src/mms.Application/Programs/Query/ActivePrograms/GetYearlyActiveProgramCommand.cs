using AspNetCoreHero.Results;
using MediatR;
using mms.Application.Programme.Query;

namespace mms.Application.Programs.Query.ActivePrograms
{
    public class GetYearlyActiveProgramCommand: IRequest<IResult<List<GetProgrammeResponse>>>
    {
    }
}
