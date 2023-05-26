using System;
using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Mentors.Command
{
	public class RemoveMentorCommand : IRequest<IResult<string>>
    {
        public string Id { get; set; }
    }
}

