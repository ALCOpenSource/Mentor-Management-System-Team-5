using Microsoft.AspNetCore.Mvc;
using mms.Application.Programme.Command;
using mms.Application.Programme.Query;

namespace mms.api.Controllers
{
    public class ProgrammeController : BaseController
    {
        [HttpGet("programme")]
        public async Task<IActionResult> GetProgrammes()
        {
            var result = await Mediator.Send(new GetProgrammesCommand());
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("active-programme")]
        public async Task<IActionResult> GetActiveProgrammes()
        {
            var result = await Mediator.Send(new GetActiveProgrammesCommand());
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpPost("programme")]
        public async Task<IActionResult> CreateProgramme(CreateProgrammeCommand command)
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