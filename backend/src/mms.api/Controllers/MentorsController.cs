using Microsoft.AspNetCore.Mvc;
using mms.Application.Mentors.Query;

namespace mms.api.Controllers
{
    public class MentorsController : BaseController
    {
        [HttpGet("mentors")]
        public async Task<IActionResult> GetMentors()
        {
            var result = await Mediator.Send(new GetMentorsCommand());
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("get-mentors-byweek")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetWeeklyTasks()
        {
            var result = await Mediator.Send(new GetWeeklyMentorsCommand());
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("get-mentors-bymonth")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetMonthlyTasks()
        {
            var result = await Mediator.Send(new GetMonthlyMentorsCommand());
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("get-mentors-byyear")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetYearlyTasks()
        {
            var result = await Mediator.Send(new GetYearlyMentorsCommand());
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }
    }
}
