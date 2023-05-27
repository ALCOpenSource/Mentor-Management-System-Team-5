using Microsoft.AspNetCore.Mvc;
using mms.Application.Programme.Command;
using mms.Application.Programme.Query;
using mms.Application.Programs.Query.ActivePrograms;
using mms.Application.Programs.Query.ArchivedPrograms;

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

        [HttpGet("get-active-programs-byweek")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetWeeklyActivePrograms()
        {
            var result = await Mediator.Send(new GetWeeklyActiveProgramCommand());
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("get-active-programs-bymonth")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetMonthlyActivePrograms()
        {
            var result = await Mediator.Send(new GetMonthlyActiveProgramCommand());
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("get-active-program-byyear")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetYearlyActiveProgram()
        {
            var result = await Mediator.Send(new GetYearlyActiveProgramCommand());
            if (!result.Succeeded)
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