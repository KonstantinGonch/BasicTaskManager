using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BasicTaskManager.Models
{
	public class Task
	{
		public long Id { get; set; }
		public string ShortDescription { get; set; }
		public string FullDescription { get; set; }
		public DateTime CreatedAt { get; set; }
		public DateTime Deadline { get; set; }
		public bool Done { get; set; }

		public long UserId { get; set; }
		public User User { get; set; }
	}
}
