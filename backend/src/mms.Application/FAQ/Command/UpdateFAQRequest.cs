using System;
namespace mms.Application.FAQ.Command
{
	public class UpdateFAQRequest
	{
        public string Question { get; set; }
        public string Answer { get; set; }
        public bool IsGeneral { get; set; }
    }
}

