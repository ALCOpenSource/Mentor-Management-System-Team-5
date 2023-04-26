using System;
using mms.Domain.Common;

namespace mms.Domain.Entities
{
	public class Support : BaseEntity
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public string Attachment { get; set; }
    }
}

