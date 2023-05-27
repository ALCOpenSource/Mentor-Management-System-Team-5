using AspNetCoreHero.Results;
using MediatR;
using mms.Application.Programme.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mms.Application.Programs.Query.ActivePrograms
{
    public class GetActiveProgrammesCommand : IRequest<IResult<List<GetProgrammeResponse>>>
    {
    }
}
