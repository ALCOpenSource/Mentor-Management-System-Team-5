using Microsoft.AspNetCore.Mvc;
using mms.Application.Programme.Query;

namespace mms.api.Controllers
{
    public class ProgrammeController:BaseController
    {
        [HttpGet("programmes")]
        public async Task<IActionResult> GetProgrammes()
        {
            var result = await Mediator.Send(new GetProgrammesCommand());
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }
    }
}
