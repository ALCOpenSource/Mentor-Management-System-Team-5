using System;
using AspNetCoreHero.Results;
using MediatR;
using mms.Application.UserNotification.Query;

namespace mms.Application.Programs.Query.ArchivedPrograms
{
    public class GetArchiveProgramsCommand : IRequest<IResult<List<GetArchiveProgramsResponse>>>
    {
    }
}

