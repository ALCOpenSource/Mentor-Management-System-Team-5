using System;
using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using mms.Application.UserPrivacy.Command.EditUserPrivacy;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Application.Support.Command
{
	public class AddSupportCommandHandler : IRequestHandler<AddSupportCommand, IResult>
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public AddSupportCommandHandler(ApplicationContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IResult> Handle(AddSupportCommand request, CancellationToken cancellationToken)
        {
            var supportEntity = _mapper.Map<Domain.Entities.Support>(request);

            supportEntity.Id = Guid.NewGuid().ToString();
            supportEntity.CreatedAt = DateTime.Now;
            
            await _context.Supports.AddAsync(supportEntity);
            await _context.SaveChangesAsync(cancellationToken);
            return await Result.SuccessAsync();
        }
    }
}

