using AspNetCoreHero.Results;
using Microsoft.AspNetCore.Mvc;
using mms.Application.Programme.Query;
using mms.Application.Programs.Command.CreateProgram;
using mms.Application.Programs.Command.DeleteProgram;
using mms.Application.Programs.Command.UpdateTask;
using mms.Application.Programs.Query.ActivePrograms;
using mms.Application.Programs.Query.ArchivedPrograms;
using System.Net;

namespace mms.api.Controllers
{
    public class ProgramsController : BaseController
    {

        [HttpDelete("programs/{id}")]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await Mediator.Send(new DeleteProgramCommand { Id = id });

            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

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


        [HttpPut("program/{id}")]
        public async Task<IActionResult> PutProgram(string id, [FromBody] UpdateProgramRequest request)
        {
            PutProgramCommand command = new()
            {
                Id = id,
                UpdatedAt = DateTime.Now,
                Description = request.Description,
                Status = request.Status,
                ArchivedBy = request.ArchivedBy,
                DateArchived = request.DateArchived,
                DateCompleted = request.DateCompleted,
                Criteria = request.Criteria,
                CreatedBy = request.CreatedBy,
                Name = request.Name,
                ProgrammePicture = request.ProgrammePicture,
                Managers = request.Managers,
                Mentors = request.Mentors
            };

            var result = await Mediator.Send(command);
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }
    }
}