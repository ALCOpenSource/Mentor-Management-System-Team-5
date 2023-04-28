using System;
using AspNetCoreHero.Results;
using MediatR;
using mms.Application.Profile.Query.GetProfileById;

namespace mms.Application.FAQ.Query
{
	public class GetFAQsCommand : IRequest<Result<List<GetFAQsResponse>>>
    {
		public bool IsGeneral { get; set; }
	}
}

