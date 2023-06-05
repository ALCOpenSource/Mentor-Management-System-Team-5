using System;
using AspNetCoreHero.Results;
using MediatR;
using System.ComponentModel.DataAnnotations;

namespace mms.Application.Account.ChangePassword
{
    public class ChangePasswordCommand : IRequest<Result<string>>
    {
        [Required] public string CurrentPassword { get; set; }
        [Required] public string newPassword { get; set; }

        [Compare("newPassword", ErrorMessage = "The new password and Confirmation password do not match")]
        public string ConfirmPassword { get; set; }
    }
}