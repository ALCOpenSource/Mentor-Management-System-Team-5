using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using mms.Application.Support.Command;
using mms.Domain.Entities;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;
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

        public async Task<IResult> Handle(CreateTaskCommand request, CancellationToken cancellationToken)
        {
            var taskEntity = _mapper.Map<Domain.Entities.UserTask>(request);

            taskEntity.Id = Guid.NewGuid().ToString();
            taskEntity.CreatedAt = DateTime.Now;
            taskEntity.CreatedBy = _currentUserService.AppUserId;
            await _context.UserTasks.AddAsync(taskEntity);
            await _context.SaveChangesAsync(cancellationToken);
            return await Result.SuccessAsync();
        }
    }
}
