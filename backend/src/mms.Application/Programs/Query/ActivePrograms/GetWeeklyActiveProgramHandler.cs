using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Application.Programme.Query;
using mms.Infrastructure.Context;

namespace mms.Application.Programs.Query.ActivePrograms
{
    public class GetWeeklyActiveProgramHandler : IRequestHandler<GetWeeklyActiveProgramCommand,
            IResult<List<GetProgrammeResponse>>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetWeeklyActiveProgramHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<List<GetProgrammeResponse>>> Handle(GetWeeklyActiveProgramCommand request,
            CancellationToken cancellationToken)
        {
            var startOfWeek = DateTime.Today.AddDays(-7);
            var today = DateTime.Today;
            var programmes = await _context.Programmes.Where(t => (t.CreatedAt >= startOfWeek && t.CreatedAt <= today) && t.Status == Domain.Enums.ProgramStatus.Active).OrderByDescending(x => x.CreatedAt).ToListAsync();
            if (!programmes.Any())
            {
                return await Result<List<GetProgrammeResponse>>.FailAsync("No one week old Active Program Available");
            }

            var result = _mapper.Map<List<GetProgrammeResponse>>(programmes);

            return await Result<List<GetProgrammeResponse>>.SuccessAsync(result);
        }
    }
}
