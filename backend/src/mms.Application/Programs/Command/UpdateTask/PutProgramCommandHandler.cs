using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Application.Programs.Command.UpdateTask;
using mms.Infrastructure.Context;

namespace mms.Application.UserTasks.Command.UpdateTask
{
    public class PutProgramCommandHandler : IRequestHandler<PutProgramCommand, IResult<string>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public PutProgramCommandHandler(ApplicationContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<string>> Handle(PutProgramCommand request, CancellationToken cancellationToken)
        {

            var program =
                await _context.Programs.Include(x => x.MentorManagers).Include(y => y.Mentors).FirstOrDefaultAsync(x => x.Id.Equals(request.Id),
                    cancellationToken);
            if (program == null)
            {
                return await Result<string>.FailAsync($"Program with Id {request.Id} does not exist");
            }


            // Update the mentors
            var updatedMentorIds = request.Mentors.Select(mentorDto => mentorDto.ProgramsMentorId);

            var existingMentorIds = program.Mentors.Select(m => m.Id).ToList();

            var mentorsToAdd = await _context.ProgramsMentors.Where(m => updatedMentorIds.Contains(m.Id) && !existingMentorIds.Contains(m.Id)).ToListAsync();
            var mentorsToRemove = program.Mentors.Where(m => !updatedMentorIds.Contains(m.Id)).ToList();

            foreach (var mentorToRemove in mentorsToRemove)
            {
                program.Mentors.Remove(mentorToRemove);
            }

            foreach (var mentorToAdd in mentorsToAdd)
            {
                program.Mentors.Add(mentorToAdd);
            }

            // Update the mentor managers
            var updatedMentorManagerIds = request.Managers.Select(mangerDto => mangerDto.MentorManagerId);
            var existingMentorManagerIds = program.MentorManagers.Select(mm => mm.Id).ToList();

            var mentorManagersToAdd = await _context.MentorManagers.Where(mm => updatedMentorManagerIds.Contains(mm.Id) && !existingMentorManagerIds.Contains(mm.Id)).ToListAsync();
            var mentorManagersToRemove = program.MentorManagers.Where(mm => !updatedMentorManagerIds.Contains(mm.Id)).ToList();

            foreach (var mentorManagerToRemove in mentorManagersToRemove)
            {
                program.MentorManagers.Remove(mentorManagerToRemove);
            }

            foreach (var mentorManagerToAdd in mentorManagersToAdd)
            {
                program.MentorManagers.Add(mentorManagerToAdd);
            }

            var entity = _mapper.Map(request, program);

            _context.Programs.Update(entity);
            await _context.SaveChangesAsync(cancellationToken);
            return await Result<string>.SuccessAsync("Successful");
        }
    }
}
