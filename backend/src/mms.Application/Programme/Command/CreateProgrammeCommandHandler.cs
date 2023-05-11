using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using mms.Application.Report.Command;
using mms.Domain.Entities;
using mms.Infrastructure.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mms.Application.Programme.Command
{
    public class CreateProgrammeCommandHandler : IRequestHandler<CreateProgrammeCommand, IResult>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public CreateProgrammeCommandHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult> Handle(CreateProgrammeCommand request, CancellationToken cancellationToken)
        {
            var programme = _mapper.Map<Domain.Entities.Programme>(request);

            programme.Id = Guid.NewGuid().ToString();
            programme.CreatedAt = DateTime.Now;
            await _context.Programmes.AddAsync(programme);
            await _context.SaveChangesAsync(cancellationToken);
            return await Result.SuccessAsync();
        }
    }
}
