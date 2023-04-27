using System;
using Microsoft.AspNetCore.Mvc;
using mms.Application.Support.Command;
using mms.Application.UserNotification.Command.EditUserNotification;

namespace mms.api.Controllers
{
	public class SupportController : BaseController
    {
        [HttpPost("support")]
        public async Task<IActionResult> PostSupport(AddSupportCommand command)
        {
            var result = await Mediator.Send(command);
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }
    }
}

