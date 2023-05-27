using Microsoft.AspNetCore.Mvc;
using mms.Application.MentorManagers.Query;

namespace mms.api.Controllers
{
    public class MentorManagerController : BaseController
    {
        [HttpGet("mentor-managers")]
        public async Task<IActionResult> GetMentorManagers()
        {
            var result = await Mediator.Send(new GetMentorManagersCommand());
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("get-mentormanagers-byweek")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetWeeklyTasks()
        {
            var result = await Mediator.Send(new GetWeeklyMentorManagersCommand());
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("get-mentormanagers-bymonth")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetMonthlyTasks()
        {
            var result = await Mediator.Send(new GetMonthlyMentorManagersCommand());
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("get-mentormanagers-byyear")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetYearlyTasks()
        {
            var result = await Mediator.Send(new GetYearlyMentorManagersCommand());
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }
    }
}
