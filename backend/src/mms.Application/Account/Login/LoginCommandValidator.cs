using FluentValidation;
using mms.Application.Common.Validator;

namespace mms.Application.Account.Login
{
    public class LoginCommandValidator : AbstractValidator<LoginCommand>
    {
        public LoginCommandValidator()
        {
            RuleFor(request => request.Email)
                .NotEmpty()
                .EmailAddress()
                .MaximumLength(100);

            RuleFor(request => request.Password)
                .NotEmpty()
                .Password()
                .MaximumLength(100);
        }
    }
}