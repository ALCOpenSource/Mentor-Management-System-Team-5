using AspNetCoreHero.Results;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mms.Application.Programme.Query
{
    public class GetActiveProgrammesCommand : IRequest<IResult<List<GetProgrammeResponse>>>
    {
    }
}
