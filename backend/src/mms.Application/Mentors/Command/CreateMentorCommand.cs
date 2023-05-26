using System;
using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Mentors.Command
{
	public class CreateMentorCommand : IRequest<IResult<string>>
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
