using System;
using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Support.Command
{
	public class AddSupportCommand : IRequest<IResult>
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public string Attachment { get; set; }
    }
}

