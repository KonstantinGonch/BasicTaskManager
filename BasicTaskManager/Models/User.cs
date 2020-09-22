using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BasicTaskManager.Models
{
	public class User
	{
		public long Id { get; set; }
		public string NickName { get; set; }
		public string Login { get; set; }
		public string Password { get; set; }
	}
}
