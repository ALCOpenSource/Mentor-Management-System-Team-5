using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;

namespace mms.Application.Mentors.Query
{
    public class GetWeeklyMentorsHandler : IRequestHandler<GetWeeklyMentorsCommand,
            IResult<List<GetMentorsResponse>>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetWeeklyMentorsHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<List<GetMentorsResponse>>> Handle(GetWeeklyMentorsCommand request,
            CancellationToken cancellationToken)
        {
            var startOfWeek = DateTime.Today.AddDays(-7);
            var today = DateTime.Today;
            var mentors = await _context.ProgramsMentors.Where(t => t.CreatedAt >= startOfWeek && t.CreatedAt <= today).OrderByDescending(x => x.CreatedAt).ToListAsync();
            if (mentors == null)
            {
                return await Result<List<GetMentorsResponse>>.FailAsync("No one week old Mentors Available");
            }

            var result = _mapper.Map<List<GetMentorsResponse>>(mentors);

            return await Result<List<GetMentorsResponse>>.SuccessAsync(result);
        }
    }
}