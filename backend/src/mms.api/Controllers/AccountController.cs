using AspNetCoreHero.Results;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using mms.Application.Account.ChangePassword;
using mms.Application.Account.Login;
using mms.Application.Account.PasswordReset;
using mms.Application.Account.RefreshToken;
using mms.Infrastructure.Interface;
using System.Net;
using mms.Application.Account.ConfirmEmail;
using mms.Application.Account.Registration.MentorManager;

namespace mms.api.Controllers
{
    public class AccountController : BaseController
    {
        public AccountController(IMailService mailService)
        {
            _mailService = mailService;
        }

        private readonly IMailService _mailService;

        [AllowAnonymous]
        [HttpPost("login")]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> LoginAsync(LoginCommand command)
        {
            var result = await Mediator.Send(command);
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [AllowAnonymous]
        [HttpPost("mentor-manager-registration")]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> MentorManagerRegistration(MentorManagerCommand command)
        {
            var result = await Mediator.Send(command);
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [AllowAnonymous]
        [HttpPost("confirm-email")]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> ConfirmEmail(ConfirmEmailCommand command)
        {
            var result = await Mediator.Send(command);
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [AllowAnonymous]
        [HttpPost("refresh-token")]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> RefreshToken(RefreshTokenCommand command)
        {
            var result = await Mediator.Send(command);
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [AllowAnonymous]
        [HttpPost("forget-password")]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> ForgetPasswordAsync(ForgetPasswordCommand command)
        {
            var result = await Mediator.Send(command);
            if (!result.Succeeded)
            {
                return BadRequest(result.Message);
            }

            var forgetPasswordLink = Url.Action(nameof(ResetPassword), "Account",
                new { token = result.Data.Token, email = result.Data.Email }, Request.Scheme);
            var mail = new Domain.Mail.MailRequest
            {
                Subject = "Forgot Password Link",
                ToEmail = result.Data.Email!,
                Body = forgetPasswordLink!
            };
            await _mailService.SendEmailAsync(mail);

            return Ok(result);
        }

        [AllowAnonymous]
        [HttpGet("reset-password")]
        [ProducesResponseType(typeof(Result<ResetPassword>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> ResetPassword(string token, string email)
        {
            var result = new ResetPassword { Token = token, Email = email };

            return Ok(new { result });
        }

        [AllowAnonymous]
        [HttpPost("reset-password")]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> ResetPasswordAsync(ResetPassword command)
        {
            var result = await Mediator.Send(command);
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpPut("change-password")]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> ChangePasswordAsync(ChangePasswordCommand command)
        {
            var result = await Mediator.Send(command);
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }
    }
}