using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;

namespace mms.Application.Report.Command
{
    public class DeleteReportCommandHandler : IRequestHandler<DeleteReportCommand, IResult<string>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public DeleteReportCommandHandler(ApplicationContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<string>> Handle(DeleteReportCommand request, CancellationToken cancellationToken)
        {

            var report = await _context.Reports.Where(a => a.Id == request.Id).FirstOrDefaultAsync();
            if (report == null)
            {
                return await Result<string>.FailAsync($"Report with Id {request.Id} does not exist");
            }

            var entity = _mapper.Map(request, report);

            _context.Reports.Remove(entity);
            await _context.SaveChangesAsync(cancellationToken);
            return await Result<string>.SuccessAsync("Successful");
        }
    }
}
