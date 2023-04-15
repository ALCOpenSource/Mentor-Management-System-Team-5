using System;
using mms.Domain.Mail;

namespace mms.Infrastructure.Interface
{
	public interface IMailService
	{
        Task SendEmailAsync(MailRequest mailRequest);
    }
}

