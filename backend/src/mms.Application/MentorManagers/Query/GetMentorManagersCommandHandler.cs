using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Application.MentorManagers.Query
{
    public class GetMentorManagersCommandHandler : IRequestHandler<GetMentorManagersCommand,
            IResult<List<GetMentorManagersResponse>>>
    {
        private readonly ICurrentUserService _currentUserService;
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetMentorManagersCommandHandler(ICurrentUserService currentUserService, ApplicationContext context,
            IMapper mapper)
        {
            _currentUserService = currentUserService;
            _context = context;
            _mapper = mapper;
        }


        public async Task<IResult<List<GetMentorManagersResponse>>> Handle(GetMentorManagersCommand request,
            CancellationToken cancellationToken)
        {
            if (string.IsNullOrEmpty(_currentUserService.AppUserId))
            {
                return await Result<List<GetMentorManagersResponse>>.FailAsync("Invalid user");
            }

            var mentors = await _context.MentorManagers.Include(M => M.ProgramsMentors).Include(y => y.Programs).Include(x => x.AppUser).Where(x => x.AppUserId == _currentUserService.AppUserId).ToListAsync();
            if (!mentors.Any())
            {
                return await Result<List<GetMentorManagersResponse>>.FailAsync("No Mentor Managers Available");
            }

            var result = _mapper.Map<List<GetMentorManagersResponse>>(mentors);

            return await Result<List<GetMentorManagersResponse>>.SuccessAsync(result);
        }
    }
}
