using System;
using mms.Domain.Common;

namespace mms.Domain.Entities
{
	public class FAQ : BaseEntity
	{
		public string Question { get; set; }
		public string Answer { get; set; }
		public bool IsGeneral { get; set; }
	}
}

