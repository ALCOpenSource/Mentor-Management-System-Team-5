using AspNetCoreHero.Results;
using Microsoft.AspNetCore.Mvc;
using mms.Application.Profile.Command.UpdateProfile;
using System.Net;

namespace mms.api.Controllers
{
    public class ProfileController : BaseController
    {
        [HttpPut("update-profile")]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> UpdateProfileAsync(UpdateProfileCommand command)
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