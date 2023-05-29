using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Application.Programme.Query;
using mms.Infrastructure.Context;

namespace mms.Application.Programs.Query.ActivePrograms
{
    public class GetMonthlyActiveProgramHandler : IRequestHandler<GetMonthlyActiveProgramCommand,
            IResult<List<GetProgrammeResponse>>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetMonthlyActiveProgramHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<List<GetProgrammeResponse>>> Handle(GetMonthlyActiveProgramCommand request,
            CancellationToken cancellationToken)
        {
            //TODO:
            //Check how status are Inserted in the database for Tasks
            var programs = await _context.Programmes.Where(m => m.CreatedAt.Month == DateTime.UtcNow.Month && m.Status == Domain.Enums.ProgramStatus.Active).OrderByDescending(x => x.CreatedAt).ToListAsync();
            if (!programs.Any())
            {
                return await Result<List<GetProgrammeResponse>>.FailAsync("No Monthly Active Programs  Available");
            }

            var result = _mapper.Map<List<GetProgrammeResponse>>(programs);

            return await Result<List<GetProgrammeResponse>>.SuccessAsync(result);
        }
    }
}
