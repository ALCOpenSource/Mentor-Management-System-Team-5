using Microsoft.AspNetCore.Mvc;
using mms.Application.Report.Command;
using mms.Application.Report.Query;
using Outlook = Microsoft.Office.Interop.Outlook;
using Office = Microsoft.Office.Core;
using MimeKit;
using Org.BouncyCastle.Utilities;
using System.Net.Mail;

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

        [HttpGet("downloadReport/{reportId}")]
        public async Task<IActionResult> GetDownloadPdf(string reportId)
        {
            var result = await Mediator.Send(new DownloadReportCommand { Id = reportId });
            return File(result,"application/octet-stream", "report.pdf");
        }

        [HttpGet("shareReport/{reportId}")]
        public async Task  ShareReportViaEmail(string reportId)
        {
            var result = await Mediator.Send(new DownloadReportCommand { Id = reportId });
            var file =  File(result, "application/octet-stream", "report.pdf");

            Outlook.Application app = new Outlook.Application();
            Outlook.MailItem mailItem = (Outlook.MailItem)app.CreateItem(Outlook.OlItemType.olMailItem);
            mailItem.BodyFormat = Microsoft.Office.Interop.Outlook.OlBodyFormat.olFormatHTML;

            mailItem.GetInspector.Activate();
            var signature = mailItem.HTMLBody;
            mailItem.HTMLBody = signature;
            mailItem.Subject = "Repost Summary";

            MemoryStream ms = new MemoryStream(file.FileContents);
            ms.Position = 0;



            mailItem.Attachments.Add(new Attachment(new MemoryStream(result), "report.pdf"));
            mailItem.Display(false);
            mailItem.Display(true);
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