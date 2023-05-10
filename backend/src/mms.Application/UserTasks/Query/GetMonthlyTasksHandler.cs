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
    public class GetMonthlyTasksHandler : IRequestHandler<GetMonthlyTasksCommand,  IResult<List<GetUserTasksResponse>>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetMonthlyTasksHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<List<GetUserTasksResponse>>> Handle(GetMonthlyTasksCommand request,
            CancellationToken cancellationToken)
        {
            //TODO:
            //Check how status are Inserted in the database for Tasks
            var usertasks = await _context.UserTasks.Where(m => m.DateCreated.Month == DateTime.UtcNow.Month).OrderByDescending(x => x.DateCreated).ToListAsync();
            if (usertasks == null)
            {
                return await Result<List<GetUserTasksResponse>>.FailAsync("No Monthly Tasks Available");
            }

            var result = _mapper.Map<List<GetUserTasksResponse>>(usertasks);

            return await Result<List<GetUserTasksResponse>>.SuccessAsync(result);
        }
    }
}