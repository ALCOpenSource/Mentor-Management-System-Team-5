using System;
using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using mms.Application.UserNotification.Query;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Application.Programme.Query
{
    public class GetArchiveProgramsCommandHandler : IRequestHandler<GetArchiveProgramsCommand,
            IResult<List<GetArchiveProgramsResponse>>>
    {
        private readonly ICurrentUserService _currentUserService;
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetArchiveProgramsCommandHandler(ICurrentUserService currentUserService, ApplicationContext context,
            IMapper mapper)
        {
            _currentUserService = currentUserService;
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<List<GetArchiveProgramsResponse>>> Handle(GetArchiveProgramsCommand request,
            CancellationToken cancellationToken)
        {
            if (string.IsNullOrEmpty(_currentUserService.AppUserId))
            {
                return await Result<List<GetArchiveProgramsResponse>>.FailAsync("Invalid user");
            }

            var programs = _context.Programmes.ToList();

            var result = _mapper.Map<List<GetArchiveProgramsResponse>>(programs);

            return await Result<List<GetArchiveProgramsResponse>>.SuccessAsync(result);
        }
    }
}

