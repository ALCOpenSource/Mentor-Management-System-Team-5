using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;

namespace mms.Application.Report.Command
{
    public class PutReportCommandHandler : IRequestHandler<PutReportCommand, IResult<string>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public PutReportCommandHandler(ApplicationContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<string>> Handle(PutReportCommand request, CancellationToken cancellationToken)
        {

            var report =
                await _context.Reports.FirstOrDefaultAsync(x => x.Id.Equals(request.Id),
                    cancellationToken);
            if (report == null)
            {
                return await Result<string>.FailAsync($"Report with Id {request.Id} does not exist");
            }

            var entity = _mapper.Map(request, report);
            entity.UpdatedAt = DateTime.Now;

            _context.Reports.Update(entity);
            await _context.SaveChangesAsync(cancellationToken);
            return await Result<string>.SuccessAsync("Successful");
        }
    }
}