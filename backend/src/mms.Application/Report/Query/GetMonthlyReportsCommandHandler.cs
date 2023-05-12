using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mms.Application.Report.Query
{
    public class GetMonthlyReportsCommandHandler : IRequestHandler<GetMonthlyReportsCommand,
            IResult<List<GetReportsResponse>>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetMonthlyReportsCommandHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<List<GetReportsResponse>>> Handle(GetMonthlyReportsCommand request,
            CancellationToken cancellationToken)
        {

            var reports = await _context.Reports.Where(m => m.CreatedAt.Month == DateTime.UtcNow.Month).OrderByDescending(x => x.CreatedAt).ToListAsync();
            if (reports == null)
            {
                return await Result<List<GetReportsResponse>>.FailAsync("No Monthly Reports Available");
            }

            var result = _mapper.Map<List<GetReportsResponse>>(reports);

            return await Result<List<GetReportsResponse>>.SuccessAsync(result);
        }
    }
}