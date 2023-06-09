using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Domain.Entities;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Application.UserTasks.Command.UpdateTask
{
    public class PutUserTaskCommandHandler : IRequestHandler<PutUserTaskCommand, IResult<string>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public PutUserTaskCommandHandler(ApplicationContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<string>> Handle(PutUserTaskCommand request, CancellationToken cancellationToken)
        {

            var task =
                await _context.UserTasks.Include(x => x.UserTaskMentorManagers).ThenInclude(d => d.MentorManager).Include(y => y.UserTaskProgramsMentors).ThenInclude(f => f.ProgramsMentor).FirstOrDefaultAsync(x => x.Id.Equals(request.Id),
                    cancellationToken);
            if (task == null)
            {
                return await Result<string>.FailAsync($"Task with Id {request.Id} does not exist");
            }


            // Update the mentors
            var updatedMentorIds = request.Mentors.Select(mentorDto => mentorDto.ProgramsMentorId);

            var existingMentorIds = task.UserTaskProgramsMentors.Select(m => m.Id).ToList();

            var mentorsToAdd = await _context.UserTaskProgramsMentors.Where(m => updatedMentorIds.Contains(m.ProgramsMentorId) && !existingMentorIds.Contains(m.Id)).ToListAsync();
            var mentorsToRemove = task.UserTaskProgramsMentors.Where(m => !updatedMentorIds.Contains(m.Id)).ToList();

            foreach (var mentorToRemove in mentorsToRemove)
            {
                task.UserTaskProgramsMentors.Remove(mentorToRemove);
            }

            foreach (var mentorToAdd in mentorsToAdd)
            {
                task.UserTaskProgramsMentors.Add(mentorToAdd);
            }

            // Update the mentor managers
            var updatedMentorManagerIds = request.Managers.Select(mangerDto => mangerDto.MentorManagerId);
            var existingMentorManagerIds = task.UserTaskMentorManagers.Select(mm => mm.Id).ToList();

            var mentorManagersToAdd = await _context.UserTaskMentorManagers.Where(mm => updatedMentorManagerIds.Contains(mm.MentorManagerId) && !existingMentorManagerIds.Contains(mm.MentorManagerId)).ToListAsync();
            var mentorManagersToRemove = task.UserTaskMentorManagers.Where(mm => !updatedMentorManagerIds.Contains(mm.Id)).ToList();

            foreach (var mentorManagerToRemove in mentorManagersToRemove)
            {
                task.UserTaskMentorManagers.Remove(mentorManagerToRemove);
            }

            foreach (var mentorManagerToAdd in mentorManagersToAdd)
            {
                task.UserTaskMentorManagers.Add(mentorManagerToAdd);
            }

            var entity = _mapper.Map(request, task);

            _context.UserTasks.Update(entity);
            await _context.SaveChangesAsync(cancellationToken);
            return await Result<string>.SuccessAsync("Successful");
        }
    }
}
