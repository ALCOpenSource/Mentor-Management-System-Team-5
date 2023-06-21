using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Report.Command
{
    public class DownloadReportCommand : IRequest<IResult<byte[]>>
    {
        public string Id { get; set; }
    }
}