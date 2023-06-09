using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;

namespace mms.Application.UserTasks.Query
{
    public class GetUserTasksCommandHandler : IRequestHandler<GetUserTasksCommand,
            IResult<List<GetUserTasksResponse>>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetUserTasksCommandHandler(  ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<List<GetUserTasksResponse>>> Handle(GetUserTasksCommand request,
            CancellationToken cancellationToken)
        {

            var usertasks =  await _context.UserTasks.Include(x => x.UserTaskMentorManagers).ThenInclude(t => t.MentorManager).Include(d => d.UserTaskProgramsMentors).ThenInclude(d => d.ProgramsMentor).OrderByDescending(x => x.DateCreated).ToListAsync();
            if (usertasks == null)
            {
                return await Result<List<GetUserTasksResponse>>.FailAsync("No User Tasks Available");
            }

            var result = _mapper.Map<List<GetUserTasksResponse>>(usertasks);

            return await Result<List<GetUserTasksResponse>>.SuccessAsync(result);
        }
    }
}
