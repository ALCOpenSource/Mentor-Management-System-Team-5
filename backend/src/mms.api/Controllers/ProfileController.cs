using AspNetCoreHero.Results;
using Microsoft.AspNetCore.Mvc;
using mms.Application.Profile.Command.UpdateProfile;
using System.Net;
using Microsoft.AspNetCore.Authorization;
using mms.Application.Profile.Query.GetAllProfiles;
using mms.Application.Profile.Query.GetProfileById;

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

        [HttpGet("get-profile")]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> GetProfileById()
        {
            var result = await Mediator.Send(new GetProfileByIdCommand());
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [AllowAnonymous]
        [HttpGet("get-all-profiles")]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> GetAllProfiles()
        {
            var result = await Mediator.Send(new GetAllProfilesCommand());
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }
    }
}