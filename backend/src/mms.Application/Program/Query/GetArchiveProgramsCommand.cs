using System;
using AspNetCoreHero.Results;
using MediatR;
using mms.Application.UserNotification.Query;

namespace mms.Application.Program.Query
{
	public class GetArchiveProgramsCommand : IRequest<IResult<List<GetArchiveProgramsResponse>>>
    {
	}
}

