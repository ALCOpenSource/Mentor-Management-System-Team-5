using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;

namespace mms.Application.UserTasks.Query
{
    public class GetTaskByIdCommandHandler : IRequestHandler<GetTaskByIdCommand, IResult<GetUserTasksResponse>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetTaskByIdCommandHandler(ApplicationContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<GetUserTasksResponse>> Handle(GetTaskByIdCommand request, CancellationToken cancellationToken)
        {

            var usertask = await _context.UserTasks.Where(t => t.Id == request.Id).Include(x => x.MentorManagers).Include(d => d.Mentors).Include(x => x.Reports).FirstOrDefaultAsync();
            if (usertask == null)
            {
                return await Result<GetUserTasksResponse>.FailAsync("No User Task Available with the Id provided");
            }

            var result = _mapper.Map<GetUserTasksResponse>(usertask);

            return await Result<GetUserTasksResponse>.SuccessAsync(result);
        }
    }
}

