using FluentValidation;

namespace mms.Application.Account.ConfirmEmail
{
    public class ConfirmEmailCommandValidator : AbstractValidator<ConfirmEmailCommand>
    {
        public ConfirmEmailCommandValidator()
        {
            RuleFor(request => request.Email)
                .NotEmpty()
                .NotNull()
                .EmailAddress();

            RuleFor(request => request.EmailConfirmationToken)
                .NotEmpty()
                .NotNull();
        }
    }
}