using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BasicTaskManager.Models
{
	public class AuthToken
	{
		public long Id { get; set; }
		public Guid Key { get; set; }

		public long UserId { get; set; }
		public User User { get; set; }

		public DateTime ExpiresOn { get; set; }
	}
}
