using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;

namespace mms.Application.Mentors.Query
{
    public class GetMonthlyMentorsHandler : IRequestHandler<GetMonthlyMentorsCommand,  IResult<List<GetMentorsResponse>>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetMonthlyMentorsHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<List<GetMentorsResponse>>> Handle(GetMonthlyMentorsCommand request,
            CancellationToken cancellationToken)
        {
            //TODO:
            //Check how status are Inserted in the database for Tasks
            var mentors = await _context.ProgramsMentors.Where(m => m.CreatedAt.Month == DateTime.UtcNow.Month).OrderByDescending(x => x.CreatedAt).ToListAsync();
            if (mentors == null)
            {
                return await Result<List<GetMentorsResponse>>.FailAsync("No Monthly Mentors Available");
            }

            var result = _mapper.Map<List<GetMentorsResponse>>(mentors);

            return await Result<List<GetMentorsResponse>>.SuccessAsync(result);
        }
    }
}