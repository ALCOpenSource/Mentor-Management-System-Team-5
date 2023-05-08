using System;
using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Application.UserNotification.Command.EditUserNotification;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;
using mms.Infrastructure.Policy;

namespace mms.Application.FAQ.Command
{
	public class PostFAQCommandHandler : IRequestHandler<PostFAQCommand, IResult<string>>
    {
        private readonly ICurrentUserService _currentUserService;
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public PostFAQCommandHandler(ICurrentUserService currentUserService, ApplicationContext context,
            IMapper mapper)
        {
            _currentUserService = currentUserService;
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<string>> Handle(PostFAQCommand request, CancellationToken cancellationToken)
        {
            if (string.IsNullOrEmpty(_currentUserService.AppUserId))
            {
                return await Result<string>.FailAsync("Invalid user");
            }

            if (string.IsNullOrEmpty(_currentUserService.UserRole) || !_currentUserService.UserRole.Equals(Policies.Admin))
            {
                return await Result<string>.FailAsync("Invalid user Account Role");
            }

            var faq =
                await _context.FAQs.FirstOrDefaultAsync(x => x.Question.Equals(request.Question),
                    cancellationToken);
            if (faq != null)
            {
                return await Result<string>.FailAsync("Duplicate FAQ");
            }

            var entity = _mapper.Map<Domain.Entities.FAQ>(request);
            entity.Id = Guid.NewGuid().ToString();
            entity.CreatedAt = DateTime.UtcNow;

            await _context.FAQs.AddAsync(entity);
            await _context.SaveChangesAsync(cancellationToken);
            return await Result<string>.SuccessAsync("Successful");
        }
    }
}

