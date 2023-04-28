using System;
using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.FAQ.Command
{
	public class PutFAQCommand : IRequest<Result<string>>
    {
        public string Id { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        public bool IsGeneral { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}

