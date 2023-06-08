using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Application.Programme.Query;
using mms.Infrastructure.Context;

namespace mms.Application.Programs.Query.ActivePrograms
{
    public class GetYearlyActiveProgramHandler : IRequestHandler<GetYearlyActiveProgramCommand,
            IResult<List<GetProgrammeResponse>>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetYearlyActiveProgramHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<List<GetProgrammeResponse>>> Handle(GetYearlyActiveProgramCommand request,
            CancellationToken cancellationToken)
        {
            //TODO:
            //Check how status are Inserted in the database for Tasks
            var programmes = await _context.Programs.Where(y => y.CreatedAt.Year == DateTime.UtcNow.Year && y.Status == Domain.Enums.ProgramStatus.Active).ToListAsync();
            if (!programmes.Any())
            {
                return await Result<List<GetProgrammeResponse>>.FailAsync("No Yearly Active Programs Available");
            }

            var result = _mapper.Map<List<GetProgrammeResponse>>(programmes);

            return await Result<List<GetProgrammeResponse>>.SuccessAsync(result);
        }
    }
}
