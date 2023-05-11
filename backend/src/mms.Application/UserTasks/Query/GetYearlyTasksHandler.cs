using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;

namespace mms.Application.UserTasks.Query
{
    public class GetYearlyTasksHandler : IRequestHandler<GetYearlyTasksCommand,
            IResult<List<GetUserTasksResponse>>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetYearlyTasksHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<List<GetUserTasksResponse>>> Handle(GetYearlyTasksCommand request,
            CancellationToken cancellationToken)
        {
            //TODO:
            //Check how status are Inserted in the database for Tasks
            var usertasks = await _context.UserTasks.Where(y => y.DateCreated.Year == DateTime.UtcNow.Year).ToListAsync();
            if (usertasks == null)
            {
                return await Result<List<GetUserTasksResponse>>.FailAsync("No Yearly Tasks Available");
            }

            var result = _mapper.Map<List<GetUserTasksResponse>>(usertasks);

            return await Result<List<GetUserTasksResponse>>.SuccessAsync(result);
        }
    }
}