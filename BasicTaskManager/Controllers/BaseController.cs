using BasicTaskManager.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BasicTaskManager.Controllers
{
	public class BaseController : Controller
	{
		protected bool VerifyToken(string token)
		{
			using (TaskManagerContext ctx = new TaskManagerContext())
			{
				AuthToken dbToken = ctx.AuthTokens.FirstOrDefault(t => t.Key== token);

				if (dbToken == null || dbToken.IsExpired || dbToken.ExpiresOn < DateTime.Now)
					return false;

				return true;
			}
		}

		protected User GetUserByToken(string token)
		{
			if (string.IsNullOrEmpty(token) || !VerifyToken(token))
				return null;

			using (TaskManagerContext ctx = new TaskManagerContext())
			{
				AuthToken dbToken = ctx.AuthTokens.FirstOrDefault(testc => testc.Key == token);
				return ctx.Users.FirstOrDefault(u => u.Id == dbToken.UserId);
			}
		}
	}
}
