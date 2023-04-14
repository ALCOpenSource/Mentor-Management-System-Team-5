using FluentValidation;

namespace mms.Application.Common.Validator
{
    public static class ValidatorSettings
    {
        public static IRuleBuilder<T, string> Password<T>(this IRuleBuilder<T, string> ruleBuilder)
        {
            var options = ruleBuilder.NotEmpty().WithMessage("Password is required")
                .MinimumLength(6).WithMessage("Password must contain at least 6 characters")
                .Matches("[A-Z]").WithMessage("Password must contain atleast 1 uppercase letter")
                .Matches("[a-z]").WithMessage("Password must contain atleast 1 lowercase letter")
                .Matches("[0-9]").WithMessage("Password must contain a number")
                .Matches("[^a-zA-Z0-9]").WithMessage("Password must contain non alphanumeric");

            return options;
        }

        public static IRuleBuilder<T, string> Name<T>(this IRuleBuilder<T, string> ruleBuilder)
        {
            var options = ruleBuilder.NotEmpty().WithMessage("Name must be provided")
                .Matches("[A-Za-z]").WithMessage("Name can only contain alphabeths")
                .MinimumLength(2).WithMessage("Name is limited to a minimum of 2 characters");

            return options;
        }

        public static IRuleBuilder<T, string> Address<T>(this IRuleBuilder<T, string> ruleBuilder)
        {
            var options = ruleBuilder.NotNull().WithMessage("Address is required")
                .NotEmpty()
                .MinimumLength(6).WithMessage("Address must contain at least 6 characters");

            return options;
        }

        public static IRuleBuilder<T, string> PhoneNumber<T>(this IRuleBuilder<T, string> ruleBuilder)
        {
            var options = ruleBuilder.NotEmpty()
                .Matches(@"^[0-9]*$").WithMessage("Invalid Phone number")
                .OverridePropertyName("phone_number");

            return options;
        }
    }
}