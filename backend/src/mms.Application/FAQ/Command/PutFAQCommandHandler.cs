using System;
using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;
using mms.Infrastructure.Policy;

namespace mms.Application.FAQ.Command
{
	public class PutFAQCommandHandler : IRequestHandler<PutFAQCommand, IResult>
    {
        private readonly ICurrentUserService _currentUserService;
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public PutFAQCommandHandler(ICurrentUserService currentUserService, ApplicationContext context,
            IMapper mapper)
        {
            _currentUserService = currentUserService;
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult> Handle(PutFAQCommand request, CancellationToken cancellationToken)
        {
            if (string.IsNullOrEmpty(_currentUserService.AppUserId))
            {
                return await Result.FailAsync("Invalid user");
            }

            if (string.IsNullOrEmpty(_currentUserService.UserRole) || _currentUserService.UserRole == Policies.Admin)
            {
                return await Result.FailAsync("Invalid user Account Role");
            }

            var faq =
                await _context.FAQs.FirstOrDefaultAsync(x => x.Id.Equals(request.Id),
                    cancellationToken);
            if (faq == null)
            {
                return await Result.FailAsync($"FAQ with Id {request.Id} does not exist");
            }

            var entity = _mapper.Map(request, faq);

            _context.FAQs.Update(entity);
            await _context.SaveChangesAsync(cancellationToken);
            return await Result.SuccessAsync();
        }
    }
}

