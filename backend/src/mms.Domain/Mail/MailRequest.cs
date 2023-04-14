using System;

namespace mms.Domain.Mail
{
	public class MailRequest
	{
		public MailRequest()
		{
		}
        public string ToEmail { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
    }
}

