using AspNetCoreHero.Results;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mms.Application.Report.Command
{
    public class DownloadReportCommand : IRequest<byte[]>
    {
        public string Id { get; set; }
    }
}