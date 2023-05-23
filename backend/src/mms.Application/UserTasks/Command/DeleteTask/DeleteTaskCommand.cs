using AspNetCoreHero.Results;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mms.Application.UserTasks.Command.DeleteTask
{
    public class DeleteTaskCommand : IRequest<IResult<string>>
    {
        public string Id { get; set; }
    }
}
