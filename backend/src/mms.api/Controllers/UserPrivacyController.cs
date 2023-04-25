using Microsoft.AspNetCore.Mvc;
using mms.Application.UserPrivacy.Command.EditUserPrivacy;
using mms.Application.UserPrivacy.Query;

namespace mms.api.Controllers
{
    public class UserPrivacyController : BaseController
    {
        [HttpPatch("edit-user-privacy")]
        public async Task<IActionResult> EditUserPrivacy(EditUserPrivacyCommand command)
        {
            var result = await Mediator.Send(command);
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("user-privacy")]
        public async Task<IActionResult> GetUserPrivacy()
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