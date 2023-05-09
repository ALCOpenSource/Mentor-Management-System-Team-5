using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;

namespace mms.Application.Report.Query
{
    public class GetWeeklyReportsCommandHandler : IRequestHandler<GetWeeklyReportsCommand,
            IResult<List<GetReportsResponse>>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetWeeklyReportsCommandHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<List<GetReportsResponse>>> Handle(GetWeeklyReportsCommand request,
            CancellationToken cancellationToken)
        {
            var startOfWeek = DateTime.Today.AddDays(-7);
            var today = DateTime.Today;

            var reports = await _context.Reports.OrderByDescending(t => t.DateCreated >= startOfWeek && t.DateCreated <= today).ToListAsync();
            if (reports == null)
            {
                return await Result<List<GetReportsResponse>>.FailAsync("No Reports Available");
            }

            var result = _mapper.Map<List<GetReportsResponse>>(reports);

            return await Result<List<GetReportsResponse>>.SuccessAsync(result);
        }
    }
}