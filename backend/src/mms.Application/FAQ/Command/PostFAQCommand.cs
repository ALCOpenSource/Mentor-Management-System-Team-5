using System;
using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.FAQ.Command
{
	public class PostFAQCommand : IRequest<Result<string>>
    {
        public string Question { get; set; }
        public string Answer { get; set; }
        public bool IsGeneral { get; set; }
    }
}

