using AspNetCoreHero.Results;
using Microsoft.AspNetCore.Mvc;
using mms.Application.UserTasks.Command.CreateTask;
using mms.Application.UserTasks.Query;
using System.Net;

namespace mms.api.Controllers
{
    public class UserTaskController: BaseController
    {
        [HttpGet("get-tasks")]
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

        [HttpGet("get-completed-tasks")]
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

        [HttpGet("get-inprogress-tasks")]
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

        [HttpGet("get-weekly-tasks")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetWeeklyTasks()
        {
            var result = await Mediator.Send(new GetWeeklyTasksCommand());
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("get-Monthly-tasks")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetMonthlyTasks()
        {
            var result = await Mediator.Send(new GetMonthlyTasksCommand());
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("get-yearly-tasks")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetYearlyTasks()
        {
            var result = await Mediator.Send(new GetYearlyTasksCommand());
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpPost("task")]
        public async Task<IActionResult> CreateTask(CreateTaskCommand command)
        {
            var result = await Mediator.Send(command);
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }



        [HttpPut("task/{id}")]
        public async Task<IActionResult> PutTask(string id, [FromBody] UpdateUserTaskRequest request)
        {
            PutUserTaskCommand command = new()
            {
                Id = id,
                UpdatedAt = DateTime.Now,
                Description = request.Description,
                Status = request.Status,
                ProgramId = request.ProgramId,
                Title = request.Title,
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
