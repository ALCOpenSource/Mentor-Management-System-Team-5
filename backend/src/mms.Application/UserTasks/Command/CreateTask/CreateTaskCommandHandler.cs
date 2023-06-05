using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Application.Support.Command;
using mms.Domain.Entities;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;
using Org.BouncyCastle.Crypto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mms.Application.UserTasks.Command.CreateTask
{
    public class CreateTaskCommandHandler : IRequestHandler<CreateTaskCommand, IResult<string>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;
        private readonly ICurrentUserService _currentUserService;

        public CreateTaskCommandHandler(ApplicationContext context,
            IMapper mapper, ICurrentUserService currentUserService)
        {
            _context = context;
            _mapper = mapper;
            _currentUserService = currentUserService;
        }

        public async Task<IResult<string>> Handle(CreateTaskCommand request, CancellationToken cancellationToken)
        {
            var taskEntity = _mapper.Map<Domain.Entities.UserTask>(request);
            var task = new UserTask
            {
                Description = taskEntity.Description,
                Status = request.Status,
                Title = request.Title
            };
            var mentorIds = request.Mentors.Select(mentorDto => mentorDto.ProgramsMentorId);
            var mentorManagerIds = request.Managers.Select(mangerDto => mangerDto.MentorManagerId);
            var mentors = await _context.ProgramsMentors.Where(m => mentorIds.Contains(m.Id)).ToListAsync();
            var mentorManagers = await _context.MentorManagers.Where(mm => mentorManagerIds.Contains(mm.Id)).ToListAsync();

            if(mentors.Any())
            {
                task.Mentors = mentors;
            }
            if(mentorManagers.Any())
            {
                task.MentorManagers = mentorManagers;
            }

            task.Id = Guid.NewGuid().ToString();
            task.CreatedAt = DateTime.Now;
            task.CreatedBy = _currentUserService.AppUserId;
            await _context.UserTasks.AddAsync(task);
            await _context.SaveChangesAsync(cancellationToken);
            return await Result<string>.SuccessAsync();
        }
    }
}
