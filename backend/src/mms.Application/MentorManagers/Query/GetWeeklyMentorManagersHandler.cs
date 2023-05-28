using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;

namespace mms.Application.MentorManagers.Query
{
    public class GetWeeklyMentorManagersHandler : IRequestHandler<GetWeeklyMentorManagersCommand,
            IResult<List<GetMentorManagersResponse>>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetWeeklyMentorManagersHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<List<GetMentorManagersResponse>>> Handle(GetWeeklyMentorManagersCommand request,
            CancellationToken cancellationToken)
        {
            var startOfWeek = DateTime.Today.AddDays(-7);
            var today = DateTime.Today;
            var mentors = await _context.MentorManagers.Where(t => t.CreatedAt >= startOfWeek && t.CreatedAt <= today).OrderByDescending(x => x.CreatedAt).ToListAsync();
            if (!mentors.Any())
            {
                return await Result<List<GetMentorManagersResponse>>.FailAsync("No one week old Mentor Managers Available");
            }

            var result = _mapper.Map<List<GetMentorManagersResponse>>(mentors);

            return await Result<List<GetMentorManagersResponse>>.SuccessAsync(result);
        }
    }
}