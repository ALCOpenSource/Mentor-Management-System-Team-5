using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;

namespace mms.Application.UserTasks.Command.DeleteTask
{
    public class DeleteUserTaskCommandHandler : IRequestHandler<DeleteTaskCommand, IResult<string>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public DeleteUserTaskCommandHandler(ApplicationContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<string>> Handle(DeleteTaskCommand request, CancellationToken cancellationToken)
        {

            var task = await _context.UserTasks.Where(a => a.Id == request.Id).FirstOrDefaultAsync();
            if (task == null)
            {
                return await Result<string>.FailAsync($"Task with Id {request.Id} does not exist");
            }

            var entity = _mapper.Map(request, task);

            _context.UserTasks.Remove(entity);
            await _context.SaveChangesAsync(cancellationToken);
            return await Result<string>.SuccessAsync("Successful");
        }
    }
}
