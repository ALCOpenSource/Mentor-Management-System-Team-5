using Microsoft.AspNetCore.Mvc;
using mms.Application.UserNotification.Command.EditUserNotification;
using mms.Application.UserNotification.Query;

namespace mms.api.Controllers
{
    public class UserNotificationController : BaseController
    {
        [HttpPatch("edit-user-notification")]
        public async Task<IActionResult> EditUserNotification(EditUserNotificationCommand command)
        {
            var result = await Mediator.Send(command);
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("user-notification")]
        public async Task<IActionResult> GetUserNotification()
        {
            var result = await Mediator.Send(new GetUserNotificationCommand());
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }
    }
}