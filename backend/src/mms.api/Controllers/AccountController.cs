using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using mms.Application.Account.Login;
using System.Net;
using AspNetCoreHero.Results;

namespace mms.api.Controllers
{
    public class AccountController : BaseController
    {
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
    }
}