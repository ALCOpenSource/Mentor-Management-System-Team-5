using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using mms.Infrastructure.Context;

namespace mms.Application.Report.Command
{
    public class CreateReportCommandHandler : IRequestHandler<CreateReportCommand, IResult>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public CreateReportCommandHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult> Handle(CreateReportCommand request, CancellationToken cancellationToken)
        {
            var report = _mapper.Map<Domain.Entities.Report>(request);

            report.Id = Guid.NewGuid().ToString();
            report.CreatedAt = DateTime.Now;
            await _context.Reports.AddAsync(report);
            await _context.SaveChangesAsync(cancellationToken);
            return await Result.SuccessAsync();
        }
    }
}
