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

            var mentors = await (from user in _context.Users.Where(x => x.Id == _currentUserService.AppUserId)
                join programMentor in _context.ProgramsMentors on user.Id equals programMentor.AppUserId
                join program in _context.Programs on programMentor.ProgramId equals program.Id
                select new GetMentorsResponse
                {
                    AppUser = user,
                    Programme = program,
                    ProgramId = program.Id,
                    AppUserId = user.Id
                }).ToListAsync(cancellationToken);

            if (!mentors.Any())
            {
                return await Result<List<GetMentorsResponse>>.FailAsync("No Mentors Available");
            }

            return await Result<List<GetMentorsResponse>>.SuccessAsync(mentors);
        }
    }
}