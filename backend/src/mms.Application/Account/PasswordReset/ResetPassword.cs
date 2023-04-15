using System;
using System.ComponentModel.DataAnnotations;
using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Account.PasswordReset
{
	public class ResetPassword : IRequest<Result<string>>
    {
        [Required]
        public string Password { get; set; }
        [Compare("Password", ErrorMessage = "The password and Confirmation password do not match")]
        public string ConfirmPassword { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
    }
}

