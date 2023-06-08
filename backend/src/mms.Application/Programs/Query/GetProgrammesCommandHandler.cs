using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Application.UserPrivacy.Query;
using mms.Application.UserTasks.Query;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Application.Programme.Query
{
    public class GetProgrammesCommandHandler : IRequestHandler<GetProgrammesCommand,
        IResult<List<GetProgrammeResponse>>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetProgrammesCommandHandler( ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<List<GetProgrammeResponse>>> Handle(GetProgrammesCommand request,
            CancellationToken cancellationToken)
        {
            var programmes = await _context.Programs.OrderByDescending(x => x.DateCreated).ToListAsync();
            if (programmes == null)
            {
                return await Result<List<GetProgrammeResponse>>.FailAsync("No Programme Available");
            }

            var result = _mapper.Map<List<GetProgrammeResponse>>(programmes);

            return await Result<List<GetProgrammeResponse>>.SuccessAsync(result);
        }
    }
}
