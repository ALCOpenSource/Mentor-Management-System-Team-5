using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;

namespace mms.Application.Mentors.Query
{
    public class GetYearlyMentorsHandler : IRequestHandler<GetYearlyMentorsCommand,
            IResult<List<GetMentorsResponse>>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetYearlyMentorsHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<List<GetMentorsResponse>>> Handle(GetYearlyMentorsCommand request,
            CancellationToken cancellationToken)
        {
            //TODO:
            //Check how status are Inserted in the database for Tasks
            var mentors = await _context.ProgramsMentors.Where(y => y.CreatedAt.Year == DateTime.UtcNow.Year).ToListAsync();
            if (!mentors.Any())
            {
                return await Result<List<GetMentorsResponse>>.FailAsync("No Yearly Mentors Available");
            }

            var result = _mapper.Map<List<GetMentorsResponse>>(mentors);

            return await Result<List<GetMentorsResponse>>.SuccessAsync(result);
        }
    }
}