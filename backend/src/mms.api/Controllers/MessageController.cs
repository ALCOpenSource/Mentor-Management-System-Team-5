using Microsoft.AspNetCore.Mvc;
using mms.Application.Message.Command.CreateMessage;
using mms.Application.Message.Query;

namespace mms.api.Controllers
{
    public class MessageController : BaseController
    {
        [HttpPost("create-message")]
        public async Task<IActionResult> CreateMessage(CreateMessageCommand command)
        {
            var result = await Mediator.Send(command);
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("thread-messages{threadId}")]
        public async Task<IActionResult> ThreadMessages(string threadId)
        {
            var result = await Mediator.Send(new GetThreadMessagesCommand()
            {
                ThreadId = threadId
            });
            if (result.Succeeded == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }
    }
}