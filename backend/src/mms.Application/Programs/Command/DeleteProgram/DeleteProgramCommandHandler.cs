using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;

namespace mms.Application.Programs.Command.DeleteProgram
{
    public class DeleteProgramCommandHandler : IRequestHandler<DeleteProgramCommand, IResult<string>>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public DeleteProgramCommandHandler(ApplicationContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult<string>> Handle(DeleteProgramCommand request, CancellationToken cancellationToken)
        {

            var program = await _context.Programs.Where(a => a.Id == request.Id).FirstOrDefaultAsync();
            if (program == null)
            {
                return await Result<string>.FailAsync($"Program with Id {request.Id} does not exist");
            }

            var entity = _mapper.Map(request, program);

            _context.Programs.Remove(entity);
            await _context.SaveChangesAsync(cancellationToken);
            return await Result<string>.SuccessAsync("Successful");
        }
    }
}
