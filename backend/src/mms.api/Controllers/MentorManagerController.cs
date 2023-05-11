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
    }
}
