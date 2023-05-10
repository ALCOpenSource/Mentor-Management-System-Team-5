using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using mms.Application.Support.Command;
using mms.Infrastructure.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mms.Application.UserTasks.Command.CreateTask
{
    public class CreateTaskCommandHandler : IRequestHandler<CreateTaskCommand, IResult>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public CreateTaskCommandHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult> Handle(CreateTaskCommand request, CancellationToken cancellationToken)
        {
            var taskEntity = _mapper.Map<Domain.Entities.UserTask>(request);

            taskEntity.Id = Guid.NewGuid().ToString();
            taskEntity.CreatedAt = DateTime.Now;
            await _context.UserTasks.AddAsync(taskEntity);
            await _context.SaveChangesAsync(cancellationToken);
            return await Result.SuccessAsync();
        }
    }
}
