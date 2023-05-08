using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;

namespace mms.Application.UserTasks.Query
{
    public class GetCompletedUserTasksHandler : IRequestHandler<GetCompletedUserTasksCommand,
            IResult<List<GetUserTasksResponse>>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetCompletedUserTasksHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<List<GetUserTasksResponse>>> Handle(GetCompletedUserTasksCommand request,
            CancellationToken cancellationToken)
        {
            //TODO:
            //Check how status are Inserted in the database for Tasks
            var usertasks = await _context.UserTasks.Where(s => s.Status == "complete").OrderByDescending(x => x.DateCreated).ToListAsync();
            if (usertasks == null)
            {
                return await Result<List<GetUserTasksResponse>>.FailAsync("No User Tasks Available");
            }

            var result = _mapper.Map<List<GetUserTasksResponse>>(usertasks);

            return await Result<List<GetUserTasksResponse>>.SuccessAsync(result);
        }
    }
}
