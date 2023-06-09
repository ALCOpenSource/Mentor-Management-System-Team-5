using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Application.Report.Command;
using mms.Domain.Common;
using mms.Domain.Entities;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace mms.Application.Programs.Command.CreateProgram
{
    public class CreateProgrammeCommandHandler : IRequestHandler<CreateProgrammeCommand, IResult>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;
        private readonly ICurrentUserService _currentUserService;


        public CreateProgrammeCommandHandler(ApplicationContext context,
            IMapper mapper, ICurrentUserService currentUserService)
        {
            _context = context;
            _mapper = mapper;
            _currentUserService = currentUserService;
        }

        public async Task<IResult> Handle(CreateProgrammeCommand request, CancellationToken cancellationToken)
        {
            var programmeEntity = _mapper.Map<Program>(request);

            var programme = new Program
            {
                Description = programmeEntity.Description,
                Status = programmeEntity.Status,
                Criteria = JsonSerializer.Serialize(programmeEntity.Criteria),
                Name = programmeEntity.Name,
                ProgrammePicture = programmeEntity.ProgrammePicture,
                DateCompleted = programmeEntity.DateCompleted
            };

            programme.Id = Guid.NewGuid().ToString();
            programme.CreatedAt = DateTime.Now;
            programme.CreatedBy = _currentUserService.AppUserId;
            programme.ArchivedBy = _currentUserService.AppUserId;

            var mentorIds = request.Mentors.Select(mentorDto => mentorDto.ProgramsMentorId);
            var mentorManagerIds = request.Managers.Select(mangerDto => mangerDto.MentorManagerId);
            var mentors = await _context.ProgramsMentors.Where(m => mentorIds.Contains(m.Id)).ToListAsync();
            var mentorManagers = await _context.ProgramMentorManagers.Where(mm => mentorManagerIds.Contains(mm.MentorManagerId)).ToListAsync();

            if (mentors.Any())
            {
                programme.Mentors = mentors;
            }
            if (mentorManagers.Any())
            {
                programme.ProgramMentorManagers = mentorManagers;
            }
            await _context.Programs.AddAsync(programme);
            await _context.SaveChangesAsync(cancellationToken);
            return await Result.SuccessAsync();
        }
    }
}
