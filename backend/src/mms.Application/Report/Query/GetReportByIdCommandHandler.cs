using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;

namespace mms.Application.Report.Query
{
    public class GetReportByIdCommandHandler : IRequestHandler<GetReportByIdCommand,
            IResult<GetReportsResponse>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetReportByIdCommandHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<GetReportsResponse>> Handle(GetReportByIdCommand request,
            CancellationToken cancellationToken)
        {

            var report = await _context.Reports.Where(r => r.Id == request.Id).Include(x => x.UserTask).Include(y => y.Program).FirstOrDefaultAsync();
            if (report == null)
            {
                return await Result<GetReportsResponse>.FailAsync("No Report Available with the Id provided");
            }

            var result = _mapper.Map<GetReportsResponse>(report);

            return await Result<GetReportsResponse>.SuccessAsync(result);
        }
    }
}
