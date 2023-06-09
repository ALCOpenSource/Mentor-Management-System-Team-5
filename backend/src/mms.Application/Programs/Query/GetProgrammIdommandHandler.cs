using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Application.Programme.Query;
using mms.Infrastructure.Context;

namespace mms.Application.Programs.Query
{
    public class GetProgrammIdommandHandler : IRequestHandler<GetprogramByIdCommand,
        IResult<GetProgrammeResponse>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetProgrammIdommandHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<GetProgrammeResponse>> Handle(GetprogramByIdCommand request,
            CancellationToken cancellationToken)
        {
            var programmes = await _context.Programs.Where(x => x.Id == request.Id).Include(x => x.UserTasks).Include(y => y.ProgramMentorManagers).ThenInclude(x => x.MentorManager).Include(x => x.Reports).Include(x => x.Mentors).FirstOrDefaultAsync();
            if (programmes == null)
            {
                return await Result<GetProgrammeResponse>.FailAsync($"No Programme with The Id {request.Id} Available");
            }

            var result = _mapper.Map<GetProgrammeResponse>(programmes);

            return await Result<GetProgrammeResponse>.SuccessAsync(result);
        }
    }
}
