using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Domain.Entities;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

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
            var mentors = await _context.UserTaskProgramsMentors.Where(m => mentorIds.Contains(m.ProgramsMentorId)).ToListAsync();
            var mentorManagers = await _context.UserTaskMentorManagers.Where(mm => mentorManagerIds.Contains(mm.MentorManagerId)).ToListAsync();

            if(mentors.Any())
            {
                task.UserTaskProgramsMentors = mentors;
            }
            if(mentorManagers.Any())
            {
                task.UserTaskMentorManagers = mentorManagers;
            }

            task.Id = Guid.NewGuid().ToString();
            task.CreatedAt = DateTime.Now;
            task.CreatedBy = _currentUserService.AppUserId;
            await _context.UserTasks.AddAsync(task);
            await _context.SaveChangesAsync(cancellationToken);
            return await Result<string>.SuccessAsync(task.Id, "Task  Created Successfully");
        }
    }
}
