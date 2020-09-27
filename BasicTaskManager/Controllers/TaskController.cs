using BasicTaskManager.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BasicTaskManager.Controllers
{
	public class TaskController : BaseController
	{
		public ActionResult<IEnumerable<Models.Task>> GetAllTasks(string token)
		{
			User user = this.GetUserByToken(token);
			if (user == null)
				return null;

			using (TaskManagerContext ctx = new TaskManagerContext())
			{
				return ctx.Tasks.Where(t => t.UserId == user.Id).ToList();
			}
		}

		public ActionResult<IEnumerable<Models.Task>> GetTasksDone(string token)
		{
			User user = this.GetUserByToken(token);
			if (user == null)
				return null;
			using (TaskManagerContext ctx = new TaskManagerContext())
			{
				return ctx.Tasks.Where(t => t.Done && t.UserId == user.Id).ToList();
			}
		}

		public ActionResult<IEnumerable<Models.Task>> GetTasksUnDone(string token)
		{
			User user = this.GetUserByToken(token);
			if (user == null)
				return null;
			using (TaskManagerContext ctx = new TaskManagerContext())
			{
				return ctx.Tasks.Where(t => !t.Done && t.UserId == user.Id).ToList();
			}
		}

		public ActionResult<Models.Task> MarkTaskAsDone(int id, string token)
		{
			User user = this.GetUserByToken(token);
			if (user == null)
				return null;

			using (TaskManagerContext ctx = new TaskManagerContext())
			{
				Models.Task task = ctx.Tasks.FirstOrDefault(task => task.Id == id);
				if (task == null)
					return null;

				task.Done = true;
				return task;
			}
		}
	}
}
