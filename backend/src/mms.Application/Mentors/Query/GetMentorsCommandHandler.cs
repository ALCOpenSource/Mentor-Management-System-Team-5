using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Application.Mentors.Query
{
    public class GetMentorsCommandHandler : IRequestHandler<GetMentorsCommand,
            IResult<List<GetMentorsResponse>>>
    {
        private readonly ICurrentUserService _currentUserService;
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetMentorsCommandHandler(ICurrentUserService currentUserService, ApplicationContext context,
            IMapper mapper)
        {
            _currentUserService = currentUserService;
            _context = context;
            _mapper = mapper;
        }


        public async Task<IResult<List<GetMentorsResponse>>> Handle(GetMentorsCommand request,
            CancellationToken cancellationToken)
        {
            if (string.IsNullOrEmpty(_currentUserService.AppUserId))
            {
                return await Result<List<GetMentorsResponse>>.FailAsync("Invalid user");
            }

            var mentors = await _context.ProgramsMentors.Include(y => y.Programme).Include(x => x.AppUser).Where(x => x.AppUserId == _currentUserService.AppUserId).ToListAsync();
            if (mentors == null)
            {
                return await Result<List<GetMentorsResponse>>.FailAsync("No Mentors Available");
            }

            var result = _mapper.Map<List<GetMentorsResponse>>(mentors);

            return await Result<List<GetMentorsResponse>>.SuccessAsync(result);
        }
    }
}