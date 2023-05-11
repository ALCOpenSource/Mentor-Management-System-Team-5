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

namespace mms.Application.Programme.Query
{
    public class GetActiveProgrammesCommandHandler : IRequestHandler<GetActiveProgrammesCommand,
        IResult<List<GetProgrammeResponse>>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetActiveProgrammesCommandHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<List<GetProgrammeResponse>>> Handle(GetActiveProgrammesCommand request,
            CancellationToken cancellationToken)
        {
            var programmes = await _context.Programmes.Where(x => x.Status == "Active").OrderByDescending(x => x.DateCreated).ToListAsync();
            if (programmes == null)
            {
                return await Result<List<GetProgrammeResponse>>.FailAsync("No Active Programmes Available");
            }

            var result = _mapper.Map<List<GetProgrammeResponse>>(programmes);

            return await Result<List<GetProgrammeResponse>>.SuccessAsync(result);
        }
    }
}

