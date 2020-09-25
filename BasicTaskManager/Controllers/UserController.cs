﻿using BasicTaskManager.Models;
using BasicTaskManager.Util;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace BasicTaskManager.Controllers
{
	public class UserController : Controller
	{
		[HttpPost]
		public async Task<ActionResult<User>> RegisterUser([FromBody]User user)
		{
			using (TaskManagerContext ctx = new TaskManagerContext())
			{
				string password = user.Password;

				string hashedPassword = SecurityUtil.HashPassword(password);
				user.Password = hashedPassword;
				ctx.Users.Add(user);
				await ctx.SaveChangesAsync();

				user.Password = string.Empty;
				return user;
			}
		}

		public async Task<ActionResult<AuthToken>> Authorize(string login, string password)
		{
			User user = new User { Login = login, Password = password };
			using (TaskManagerContext ctx = new TaskManagerContext())
			{
				User dbUser = ctx.Users.FirstOrDefault(u => u.Login == user.Login);
				if (dbUser == null)
					return null;

				if (SecurityUtil.VerifyHashedPassword(dbUser.Password, user.Password))
				{
					AuthToken token = new AuthToken { Key = Guid.NewGuid(), UserId = dbUser.Id, ExpiresOn = DateTime.Today.AddDays(2), IsExpired = false };
					ctx.AuthTokens.Add(token);
					await ctx.SaveChangesAsync();

					token.Key = new Guid();
					return token;
				}
				return null;
			}
		}
	}
}
