using System;
namespace mms.Application.FAQ.Query
{
	public class GetFAQsResponse
	{
        public string? Id { get; set; }
        public string? Question { get; set; }
        public string? Answer { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}

