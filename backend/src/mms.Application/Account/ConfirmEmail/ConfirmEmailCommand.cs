using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Account.ConfirmEmail
{
    public class ConfirmEmailCommand : IRequest<IResult<string>>
    {
        public string Email { get; set; }
        public string EmailConfirmationToken { get; set; }
    }
}