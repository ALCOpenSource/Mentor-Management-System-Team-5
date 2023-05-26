using System;
using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Application.Mentors.Command;
using mms.Infrastructure.Context;

namespace mms.Application.MentorManagers.Command
{
	public class RemoveMentorManagerCommandHandler : IRequestHandler<RemoveMentorManagerCommand, IResult<string>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public RemoveMentorManagerCommandHandler(ApplicationContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<string>> Handle(RemoveMentorManagerCommand request, CancellationToken cancellationToken)
        {

            var task = await _context.MentorManagers.Where(a => a.Id == request.Id).FirstOrDefaultAsync();
            if (task == null)
            {
                return await Result<string>.FailAsync($"Task with Id {request.Id} does not exist");
            }

            var entity = _mapper.Map(request, task);

            _context.MentorManagers.Remove(entity);
            await _context.SaveChangesAsync(cancellationToken);
            return await Result<string>.SuccessAsync("Successful");
        }
    }
}

