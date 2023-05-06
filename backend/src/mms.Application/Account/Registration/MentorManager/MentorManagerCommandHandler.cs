using System.Transactions;
using AspNetCoreHero.Results;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using mms.Domain.Entities;
using mms.Infrastructure.Interface;
using mms.Infrastructure.Policy;

namespace mms.Application.Account.Registration.MentorManager
{
    public class MentorManagerCommandHandler : AccountBaseHandler,
        IRequestHandler<MentorManagerCommand, IResult<string>>
    {
        public MentorManagerCommandHandler(UserManager<AppUser> userManager, IConfiguration configuration,
            ITokenGeneratorService tokenGeneratorService, IMailService mailService) : base(userManager, configuration,
            tokenGeneratorService, mailService)
        {
        }

        public async Task<IResult<string>> Handle(MentorManagerCommand request, CancellationToken cancellationToken)
        {
            AppUser? user;
            user = await _userManager.FindByEmailAsync(request.Email);

            if (user != null)
            {
                return await Result<string>.FailAsync("User already Exist");
            }

            user = new AppUser()
            {
                Email = request.Email,
                FirstName = GetFirstAndLastName(request.Name).firstName,
                LastName = GetFirstAndLastName(request.Name).lastName,
                UserName = request.Email
            };

            var response = new Result<string>();

            using (var transaction = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled))
            {
                response = await CreateUser(user, Policies.Manager, password: request.Password);
                if (response.Succeeded)
                {
                    transaction.Complete();
                }
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