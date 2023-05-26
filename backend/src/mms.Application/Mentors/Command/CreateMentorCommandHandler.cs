using System;
using AspNetCoreHero.Results;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using mms.Application.Account;
using mms.Application.Account.Registration.MentorManager;
using mms.Domain.Entities;
using mms.Infrastructure.Interface;
using mms.Infrastructure.Policy;
using System.Transactions;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using mms.Infrastructure.Context;

namespace mms.Application.Mentors.Command
{
	public class CreateMentorCommandHandler : AccountBaseHandler,
        IRequestHandler<CreateMentorCommand, IResult<string>>
    {
        public CreateMentorCommandHandler(UserManager<AppUser> userManager, IConfiguration configuration,
            ITokenGeneratorService tokenGeneratorService, IMailService mailService, IMapper mapper, ApplicationContext context) : base(userManager, configuration,
            tokenGeneratorService, mailService)
        {
            _mapper = mapper;
            _context = context;
        }
        private readonly IMapper _mapper;
        private readonly ApplicationContext _context;

        public async Task<IResult<string>> Handle(CreateMentorCommand request, CancellationToken cancellationToken)
        {
            AppUser? user;
            user = await _userManager.FindByEmailAsync(request.Email);

            if (user != null)
            {
                return await Result<string>.FailAsync("User already Exist");
            }

            user = new AppUser
            {
                Email = request.Email,
                FirstName = GetFirstAndLastName(request.Name).firstName,
                LastName = GetFirstAndLastName(request.Name).lastName,
                UserName = request.Email
            };
            using var transaction = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled);
            var response = await CreateUser(user, Policies.Mentor, request.Password, true);

            var mentor = _mapper.Map<Domain.Entities.ProgramsMentor>(user);

            if (response.Succeeded)
            {
                mentor.Id = Guid.NewGuid().ToString();
                mentor.CreatedAt = DateTime.UtcNow;

                await _context.ProgramsMentors.AddAsync(mentor);
                await _context.SaveChangesAsync(cancellationToken);
                transaction.Complete();
            }

            return response;
        }

        private static (string firstName, string lastName) GetFirstAndLastName(string fullName)
        {
            var names = fullName.Split(' ', 2);
            if (names.Length == 1)
            {
                return (names[0], "");
            }
            else
            {
                return (names[0], names[1]);
            }
        }
    }
}

