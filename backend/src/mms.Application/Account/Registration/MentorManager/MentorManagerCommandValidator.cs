using FluentValidation;
using mms.Application.Common.Validator;

namespace mms.Application.Account.Registration.MentorManager
{
    public class MentorManagerCommandValidator : AbstractValidator<MentorManagerCommand>
    {
        public MentorManagerCommandValidator()
        {
            RuleFor(request => request.Name)
                .NotEmpty()
                .Name()
                .MaximumLength(100);

            RuleFor(request => request.Email)
                .NotEmpty()
                .MaximumLength(100)
                .EmailAddress();

            RuleFor(request => request.Password)
                .NotEmpty()
                .Password();
        }
    }
}