using Microsoft.AspNetCore.Mvc;
using mms.Application.Programme.Query;
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
    }
}