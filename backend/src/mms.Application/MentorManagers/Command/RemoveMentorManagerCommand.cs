using System;
using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.MentorManagers.Command
{
	public class RemoveMentorManagerCommand : IRequest<IResult<string>>
    {
        public string Id { get; set; }
    }
}

