using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Application.UserTasks.Query;
using mms.Infrastructure.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mms.Application.Report.Query
{
    internal class GetReportsCommandHandler : IRequestHandler<GetReportsCommand,
            IResult<List<GetReportsResponse>>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetReportsCommandHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<List<GetReportsResponse>>> Handle(GetReportsCommand request,
            CancellationToken cancellationToken)
        {

            var reports = await _context.Reports.Include(x => x.UserTask).Include(y => y.Program).OrderByDescending(x => x.CreatedAt).ToListAsync();
            if (reports == null)
            {
                return await Result<List<GetReportsResponse>>.FailAsync("No Reports Available");
            }

            var result = _mapper.Map<List<GetReportsResponse>>(reports);

            return await Result<List<GetReportsResponse>>.SuccessAsync(result);
        }
    }
}

