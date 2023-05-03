using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mms.Application.UserTasks.Query
{
    public class GetInProgressUserTasksHandler : IRequestHandler<GetInProgressUserTasksCommand,
            IResult<GetUserTasksResponse>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetInProgressUserTasksHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<GetUserTasksResponse>> Handle(GetInProgressUserTasksCommand request,
            CancellationToken cancellationToken)
        {
            //TODO:
            //Check how status are Inserted in the database for Tasks
            var usertasks = await _context.UserTasks.Where(s => s.Status == "inprogress").OrderByDescending(x => x.DateCreated).ToListAsync();
            if (usertasks == null)
            {
                return await Result<GetUserTasksResponse>.FailAsync("No User Tasks Available");
            }

            var result = _mapper.Map<GetUserTasksResponse>(usertasks);

            return await Result<GetUserTasksResponse>.SuccessAsync(result);
        }
    }
}
