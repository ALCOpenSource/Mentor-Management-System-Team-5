using System;
using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using mms.Application.Program.Query;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Application.FAQ.Query
{
	public class GetFAQsCommandHandler : IRequestHandler<GetFAQsCommand,
            IResult<List<GetFAQsResponse>>>
    {
        private readonly ICurrentUserService _currentUserService;
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GetFAQsCommandHandler(ICurrentUserService currentUserService, ApplicationContext context,
            IMapper mapper)
        {
            _currentUserService = currentUserService;
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<List<GetFAQsResponse>>> Handle(GetFAQsCommand request,
            CancellationToken cancellationToken)
        {
            var faqs = _context.FAQs.Where(x => x.IsGeneral == request.IsGeneral).ToList();

            var result = _mapper.Map<List<GetFAQsResponse>>(faqs);

            return await Result<List<GetFAQsResponse>>.SuccessAsync(result);
        }
    }
}

