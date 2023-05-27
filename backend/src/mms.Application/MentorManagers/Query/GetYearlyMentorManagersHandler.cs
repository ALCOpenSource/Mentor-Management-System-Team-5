using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;

namespace mms.Application.MentorManagers.Query
{
    public class GetYearlyMentorManagersHandler : IRequestHandler<GetYearlyMentorManagersCommand,
            IResult<List<GetMentorManagersResponse>>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetYearlyMentorManagersHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<List<GetMentorManagersResponse>>> Handle(GetYearlyMentorManagersCommand request,
            CancellationToken cancellationToken)
        {
            //TODO:
            //Check how status are Inserted in the database for Tasks
            var mentors = await _context.MentorManagers.Where(y => y.CreatedAt.Year == DateTime.UtcNow.Year).ToListAsync();
            if (mentors == null)
            {
                return await Result<List<GetMentorManagersResponse>>.FailAsync("No more than Year Mentor Managers Available");
            }

            var result = _mapper.Map<List<GetMentorManagersResponse>>(mentors);

            return await Result<List<GetMentorManagersResponse>>.SuccessAsync(result);
        }
    }
}