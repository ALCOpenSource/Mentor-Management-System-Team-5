using System;
namespace mms.Domain.Mail
{
	public class MailSettings
	{
		public MailSettings()
		{
		}
        public string Mail { get; set; }
        public string DisplayName { get; set; }
        public string Password { get; set; }
        public string Host { get; set; }
        public int Port { get; set; }
    }
}

