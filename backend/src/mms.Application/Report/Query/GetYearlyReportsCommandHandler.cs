using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;

namespace mms.Application.Report.Query
{
    public class GetYearlyReportsCommandHandler : IRequestHandler<GetYearlyReportsCommand,
            IResult<List<GetReportsResponse>>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetYearlyReportsCommandHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<List<GetReportsResponse>>> Handle(GetYearlyReportsCommand request,
            CancellationToken cancellationToken)
        {
            var reports = await _context.Reports.Where(y => y.DateCreated.Year == DateTime.UtcNow.Year).OrderByDescending(x => x.DateCreated).ToListAsync();
            if (reports == null)
            {
                return await Result<List<GetReportsResponse>>.FailAsync("No Reports Available");
            }

            var result = _mapper.Map<List<GetReportsResponse>>(reports);

            return await Result<List<GetReportsResponse>>.SuccessAsync(result);
        }
    }
}