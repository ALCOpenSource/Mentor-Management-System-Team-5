using Microsoft.AspNetCore.Mvc;
using mms.Application.UserPrivacy.Command.EditUserPrivacy;
using mms.Application.UserPrivacy.Query;

namespace mms.api.Controllers
{
    public class UserPrivacyController : BaseController
    {
        [HttpPatch("edituserprivacy")]
        public async Task<IActionResult> EditUserNotification(EditUserPrivacyCommand command)
        {
            var result = await Mediator.Send(command);
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("userprivacy")]
        public async Task<IActionResult> GetUserNotification()
        {
            var result = await Mediator.Send(new GetUserPrivacyCommand());
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }
    }
}