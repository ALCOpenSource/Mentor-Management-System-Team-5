using AspNetCoreHero.Results;
using Microsoft.AspNetCore.Mvc;
using mms.Application.UserTasks.Query;
using System.Net;

namespace mms.api.Controllers
{
    public class UserTaskController: BaseController
    {
        [HttpGet("get-user-tasks")]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Result<string>), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> GetUserTasks()
        {
            var result = await Mediator.Send(new GetUserTasksCommand());
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("get-completed-user-tasks")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetCompletedUserTasks()
        {
            var result = await Mediator.Send(new GetCompletedUserTasksCommand());
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("get-inprogress-user-tasks")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetInProgressUserTasks()
        {
            var result = await Mediator.Send(new GetInProgressUserTasksCommand());
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }



    }

}
