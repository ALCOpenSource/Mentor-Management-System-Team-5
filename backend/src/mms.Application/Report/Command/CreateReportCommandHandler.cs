using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Application.Report.Command
{
    public class CreateReportCommandHandler : IRequestHandler<CreateReportCommand, IResult>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;
        private readonly ICurrentUserService _currentUserService;

        public CreateReportCommandHandler(ApplicationContext context,
            IMapper mapper, ICurrentUserService currentUserService)
        {
            _context = context;
            _mapper = mapper;
            _currentUserService = currentUserService;
        }

        public async Task<IResult> Handle(CreateReportCommand request, CancellationToken cancellationToken)
        {
            var report = _mapper.Map<Domain.Entities.Report>(request);

            report.Id = Guid.NewGuid().ToString();
            report.CreatedAt = DateTime.Now();
            report.CreatedBy = _currentUserService.UserId
            await _context.Reports.AddAsync(report);
            await _context.SaveChangesAsync(cancellationToken);
            return await Result.SuccessAsync();
        }
    }
}
