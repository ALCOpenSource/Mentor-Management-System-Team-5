using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;

namespace mms.Application.MentorManagers.Query
{
    public class GetMonthlyMentorManagersHandler : IRequestHandler<GetMonthlyMentorManagersCommand,  IResult<List<GetMentorManagersResponse>>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetMonthlyMentorManagersHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<List<GetMentorManagersResponse>>> Handle(GetMonthlyMentorManagersCommand request,
            CancellationToken cancellationToken)
        {
            //TODO:
            //Check how status are Inserted in the database for Tasks
            var mentors = await _context.MentorManagers.Where(m => m.CreatedAt.Month == DateTime.UtcNow.Month).OrderByDescending(x => x.CreatedAt).ToListAsync();
            if (mentors == null)
            {
                return await Result<List<GetMentorManagersResponse>>.FailAsync("No One Month old Mentor Managers Available");
            }

            var result = _mapper.Map<List<GetMentorManagersResponse>>(mentors);

            return await Result<List<GetMentorManagersResponse>>.SuccessAsync(result);
        }
    }
}