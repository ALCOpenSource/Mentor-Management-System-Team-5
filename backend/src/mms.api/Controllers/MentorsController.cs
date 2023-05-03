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
    }
}
