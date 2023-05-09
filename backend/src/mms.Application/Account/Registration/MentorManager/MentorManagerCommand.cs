using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Account.Registration.MentorManager
{
    public class MentorManagerCommand : IRequest<IResult<string>>
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}