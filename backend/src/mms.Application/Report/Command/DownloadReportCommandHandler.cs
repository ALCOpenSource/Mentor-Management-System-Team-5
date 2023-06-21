using AspNetCoreHero.Results;
using AutoMapper;
using DinkToPdf;
using DinkToPdf.Contracts;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Application.Mentors.Command;
using mms.Infrastructure.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mms.Application.Report.Command
{
    public class DownloadReportCommandHandler : IRequestHandler<DownloadReportCommand, IResult<byte[]>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;
        private readonly IConverter _converter;

        public DownloadReportCommandHandler(ApplicationContext context, IMapper mapper, IConverter converter)
        {
            _context = context;
            _mapper = mapper;
            _converter = converter;
        }

        public async Task<IResult<byte[]>> Handle(DownloadReportCommand request, CancellationToken cancellationToken)
        {
            var report = await _context.Reports.Where(a => a.Id == request.Id).FirstOrDefaultAsync();

            var html = $@"
                   <!DOCTYPE html>
                   <html lang=""en"">
                   <head>
                       {report.ReportTitle}
                   </head>
                  <body>
                  <h1>Major Achievements</h1>
                  <p>{report.Achievements}.</p>
                   h1>Major Blockers</h1>
                  <p>{report.Blocker}.</p>
                   <h1>Major Recommendations</h1>
                  <p>{report.Recommendations}.</p>
                  </body>
                  </html>
                  ";
            GlobalSettings globalSettings = new GlobalSettings();
            globalSettings.ColorMode = ColorMode.Color;
            globalSettings.Orientation = Orientation.Portrait;
            globalSettings.PaperSize = PaperKind.A4;
            globalSettings.Margins = new MarginSettings { Top = 25, Bottom = 25 };
            ObjectSettings objectSettings = new ObjectSettings();
            objectSettings.PagesCount = true;
            objectSettings.HtmlContent = html;
            WebSettings webSettings = new WebSettings();
            webSettings.DefaultEncoding = "utf-8";
            HeaderSettings headerSettings = new HeaderSettings();
            headerSettings.FontSize = 15;
            headerSettings.FontName = "Ariel";
            headerSettings.Right = "Page [page] of [toPage]";
            headerSettings.Line = true;
            FooterSettings footerSettings = new FooterSettings();
            footerSettings.FontSize = 12;
            footerSettings.FontName = "Ariel";
            footerSettings.Center = "ALC 2023";
            footerSettings.Line = true;
            objectSettings.HeaderSettings = headerSettings;
            objectSettings.FooterSettings = footerSettings;
            objectSettings.WebSettings = webSettings;
            HtmlToPdfDocument htmlToPdfDocument = new HtmlToPdfDocument()
            {
                GlobalSettings = globalSettings,
                Objects = { objectSettings },
            };

            var pdfDocument = _converter.Convert(htmlToPdfDocument);

            return Result<byte[]>.Success(pdfDocument, "Success");
        }
    }
}