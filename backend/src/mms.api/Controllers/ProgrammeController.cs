using Microsoft.AspNetCore.Mvc;
using mms.Application.Programme.Command;
using mms.Application.Programme.Query;
using mms.Application.Report.Command;

namespace mms.api.Controllers
{
    public class ProgrammeController:BaseController
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

        [HttpPost("programme")]
        public async Task<IActionResult> CreateTask(CreateProgrammeCommand command)
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
