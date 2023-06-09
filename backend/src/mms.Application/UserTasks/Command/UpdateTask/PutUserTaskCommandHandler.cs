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
              await _context.UserTasks.Include(x => x.MentorManagers).Include(y => y.Mentors).FirstOrDefaultAsync(x => x.Id.Equals(request.Id),
                  cancellationToken);
                if (task == null)
                {
                    return await Result<string>.FailAsync($"Task with Id {request.Id} does not exist");
                }


                // Update the mentors
                if (request.Mentors != null && request.Mentors.Count != 0)
                {
                    var updatedMentorIds = request.Mentors.Select(mentorDto => mentorDto.ProgramsMentorId);

                    var existingMentorIds = task.Mentors.Select(m => m.Id).ToList();

                    var mentorsToAdd = await _context.ProgramsMentors.Where(m => updatedMentorIds.Contains(m.Id) && !existingMentorIds.Contains(m.Id)).ToListAsync();
                    var mentorsToRemove = task.Mentors.Where(m => !updatedMentorIds.Contains(m.Id)).ToList();

                    foreach (var mentorToRemove in mentorsToRemove)
                    {
                        task.Mentors.Remove(mentorToRemove);
                    }

                    foreach (var mentorToAdd in mentorsToAdd)
                    {
                        task.Mentors.Add(mentorToAdd);
                    }

                }

                // Update the mentor managers
                if (request.Managers != null && request.Managers.Count != 0)
                {
                    var updatedMentorManagerIds = request.Managers.Select(mangerDto => mangerDto.MentorManagerId);
                    var existingMentorManagerIds = task.MentorManagers.Select(mm => mm.Id).ToList();

                    var mentorManagersToAdd = await _context.MentorManagers.Where(mm => updatedMentorManagerIds.Contains(mm.Id) && !existingMentorManagerIds.Contains(mm.Id)).ToListAsync();
                    var mentorManagersToRemove = task.MentorManagers.Where(mm => !updatedMentorManagerIds.Contains(mm.Id)).ToList();

                    foreach (var mentorManagerToRemove in mentorManagersToRemove)
                    {
                        task.MentorManagers.Remove(mentorManagerToRemove);
                    }

                    foreach (var mentorManagerToAdd in mentorManagersToAdd)
                    {
                        task.MentorManagers.Add(mentorManagerToAdd);
                    }
                }

                request.CreatedBy = task.CreatedBy;

                var entity = _mapper.Map(request, task);

                _context.UserTasks.Update(entity);
                await _context.SaveChangesAsync(cancellationToken);
                return await Result<string>.SuccessAsync("Successful");
            
            
          
        }
    }
}
