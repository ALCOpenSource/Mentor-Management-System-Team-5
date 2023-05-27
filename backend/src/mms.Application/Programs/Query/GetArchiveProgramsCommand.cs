using System;
using AspNetCoreHero.Results;
using MediatR;
using mms.Application.UserNotification.Query;

namespace mms.Application.Programme.Query
{
    public class GetArchiveProgramsCommand : IRequest<IResult<List<GetArchiveProgramsResponse>>>
    {
    }
}

