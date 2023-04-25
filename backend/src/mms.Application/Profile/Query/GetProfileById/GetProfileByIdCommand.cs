using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Profile.Query.GetProfileById
{
    public class GetProfileByIdCommand : IRequest<Result<GetProfileByIResponse>>
    {
    }
}