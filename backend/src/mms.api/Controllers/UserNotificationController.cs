using Microsoft.AspNetCore.Mvc;
using mms.Application.UserNotification.Command.EditUserNotification;
using mms.Application.UserNotification.Query;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace mms.api.Controllers
{
    public class UserNotificationController : BaseController
    {
        [HttpPatch("editusernotification")]
        public async Task<IActionResult> EditUserNotification(EditUserNotificationCommand command)
        {
            var result = await Mediator.Send(command);
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("usernotification")]
        public async Task<IActionResult> GetUserNotification(GetUSerNotificationCommand command)
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