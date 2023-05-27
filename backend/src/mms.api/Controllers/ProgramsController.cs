using Microsoft.AspNetCore.Mvc;
using mms.Application.Programme.Command;
using mms.Application.Programme.Query;

namespace mms.api.Controllers
{
    public class ProgramsController : BaseController
    {


        [HttpGet("allPrograms")]
        public async Task<IActionResult> GetProgrammes()
        {
            var result = await Mediator.Send(new GetProgrammesCommand());
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("archivedPrograms")]
        public async Task<IActionResult> GetPrograms()
        {
            var result = await Mediator.Send(new GetArchiveProgramsCommand());
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            if (result.Data == null || result.Data.Count != 0)
            {
                return NotFound(result);
            }

            return Ok(result);
        }

        [HttpGet("active-programs")]
        public async Task<IActionResult> GetActiveProgrammes()
        {
            var result = await Mediator.Send(new GetActiveProgrammesCommand());
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpPost("programs")]
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