using Microsoft.AspNetCore.Mvc;
using mms.Application.Report.Command;
using mms.Application.Report.Query;

namespace mms.api.Controllers
{
    public class ReportController : BaseController
    {
        [HttpGet("reports")]
        public async Task<IActionResult> GetReports()
        {
            var result = await Mediator.Send(new GetReportsCommand());
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }



        [HttpGet("get-weekly-reports")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetWeeklyReports()
        {
            var result = await Mediator.Send(new GetWeeklyReportsCommand());
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("get-Monthly-reports")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetMonthlyReports()
        {
            var result = await Mediator.Send(new GetMonthlyReportsCommand());
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("get-yearly-reports")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetYearlyReports()
        {
            var result = await Mediator.Send(new GetYearlyReportsCommand());
            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }




        [HttpPost("report")]
        public async Task<IActionResult> CreateTask(CreateReportCommand command)
        {
            var result = await Mediator.Send(command);
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpPut("report/{id}")]
        public async Task<IActionResult> PutReport(string id, [FromBody] UpdateReportRequest request)
        {
            PutReportCommand command = new()
            {
                Id = id,
                UpdatedAt = DateTime.Now,
                CreatedBy = request.CreatedBy,
                Achievements = request.Achievements,
                Blocker = request.Blocker,
                Recommendations = request.Recommendations,
                ReportTitle = request.ReportTitle,
                TaskId = request.TaskId,
                Type = request.Type,
                ProgramId = request.ProgramId,
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