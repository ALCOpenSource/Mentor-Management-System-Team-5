using System;
using Microsoft.AspNetCore.Mvc;
using mms.Application.Program.Query;
using mms.Application.UserPrivacy.Query;

namespace mms.api.Controllers
{
	public class ProgramsController : BaseController
	{
        [HttpGet("allPrograms")]
        public async Task<IActionResult> GetPrograms()
        {
            var result = await Mediator.Send(new GetArchiveProgramsCommand());
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            if(result.Data == null || result.Data.Count != 0)
            {
                return NotFound(result);
            }

            return Ok(result);
        }
    }
}

