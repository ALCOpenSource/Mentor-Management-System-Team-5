using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using mms.Application.FAQ.Command;
using mms.Application.FAQ.Query;
using mms.Application.Support.Command;

namespace mms.api.Controllers
{
	public class FAQController : BaseController
	{
        [HttpPost("faq")]
        public async Task<IActionResult> PostFAQ(PostFAQCommand command)
        {
            var result = await Mediator.Send(command);
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpPut("faq/{id}")]
        public async Task<IActionResult> PutFAQ(string id, [FromBody] UpdateFAQRequest request)
        {
            PutFAQCommand command = new()
            {
                Id = id,
                UpdatedAt = DateTime.Now,
                Answer = request.Answer,
                IsGeneral = request.IsGeneral,
                Question = request.Question,
            };

            var result = await Mediator.Send(command);
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [AllowAnonymous]
        [HttpGet("technicalFAQ")]
        public async Task<IActionResult> GetTechnicalFAQs()
        {
            GetFAQsCommand command = new()
            {
                IsGeneral = false,
            };

            var result = await Mediator.Send(command);
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [AllowAnonymous]
        [HttpGet("generalFAQ")]
        public async Task<IActionResult> GetGeneralFAQs()
        {
            GetFAQsCommand command = new()
            {
                IsGeneral = true,
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

