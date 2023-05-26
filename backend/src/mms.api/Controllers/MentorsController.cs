using System.Net;
using AspNetCoreHero.Results;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using mms.Application.Account.Registration.MentorManager;
using mms.Application.Mentors.Command;
using mms.Application.Mentors.Query;
using mms.Application.UserTasks.Command.DeleteTask;
using mms.Domain.Configuration;
using mms.Domain.Mail;
using mms.Infrastructure.Interface;

namespace mms.api.Controllers
{
    public class MentorsController : BaseController
    {
        public MentorsController(IMailService mailService, IOptions<Frontend> ui)
        {
            _mailService = mailService;
            _ui = ui.Value;
        }

        private readonly IMailService _mailService;
        private readonly Frontend _ui;

        [HttpGet("mentors")]
        public async Task<IActionResult> GetMentors()
        {
            var result = await Mediator.Send(new GetMentorsCommand());
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpPost("mentors/invitation")]
        public async Task<IActionResult> InviteMentor([FromBody] string email)
        {
            string invitationLink = $"<!DOCTYPE html>" +
                                        $"<html>" +
                                            $" <head>" +
                                                $" <meta charset=\"utf-8\" />" +
                                                    $"<title></title>" +
                                            $"</head>" +
                                            $"<body style=\"font-family: Arial, sans-serif; margin: 0; padding: 0; text-align: center; background-color: #f2f2f2;\">" +
                                                $"<div class=\"container\" style=\"margin: 20px auto; max-width: 600px; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);\">" +
                                                    $"<h1 style=\"font-size: 24px; margin-bottom: 20px;\">Registration Invite</h1>" +
                                                    $"<p style=\"font-size: 16px; margin-bottom: 20px; line-height: 1.5;\"> Hi {email}, " +
                                                    $"<br /> You have received an invite to be added to Our network. " +
                                                    $"<br /> Please click the button below to Accept Invitation. </p>" +
                                                    $"<a href={_ui.SignUpUrl} style=\"display: inline-block; padding: 10px 20px; margin-top: 20px; background-color: #3366cc; color: #ffffff; font-size: 16px; text-decoration: none; border-radius: 5px;\">Confirm Email</a>" +
                                                    $" <p style=\"font-size: 16px; margin-bottom: 20px; line-height: 1.5;\"> If you did not make this request, please ignore this email and your account will remain inactive. </p>" +
                                                    $"<p style=\"font-size: 16px; line-height: 1.5;\">Thank you for using our service!</p>" +
                                                 $"</div>" +
                                             $"</body>" +
                                        $"</html>";
            var mail = new Domain.Mail.MailRequest
            {
                Subject = "Registration Invite",
                ToEmail = email!,
                Body = invitationLink,
            };
            await _mailService.SendEmailAsync(mail);

            return Ok();
        }

        [AllowAnonymous]
        [HttpPost("mentor-registration")]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> MentorRegistration(CreateMentorCommand command)
        {
            var result = await Mediator.Send(command);
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpDelete("mentor/{id}")]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await Mediator.Send(new RemoveMentorCommand { Id = id });

            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }
    }
}
