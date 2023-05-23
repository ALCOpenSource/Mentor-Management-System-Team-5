using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Application.UserTasks.Command.CreateTask
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
                await _context.UserTasks.FirstOrDefaultAsync(x => x.Id.Equals(request.Id),
                    cancellationToken);
            if (task == null)
            {
                return await Result<string>.FailAsync($"Task with Id {request.Id} does not exist");
            }

            var entity = _mapper.Map(request, task);

            _context.UserTasks.Update(entity);
            await _context.SaveChangesAsync(cancellationToken);
            return await Result<string>.SuccessAsync("Successful");
        }
    }
}
