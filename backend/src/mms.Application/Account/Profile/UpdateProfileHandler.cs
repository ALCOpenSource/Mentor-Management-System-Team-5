using System;
using System.Security.Claims;
using AspNetCoreHero.Results;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using mms.Application.Account.PasswordReset;
using mms.Domain.Entities;
using mms.Infrastructure.Context;
using mms.Infrastructure.Interface;

namespace mms.Application.Account.Profile
{
	public class UpdateProfileHandler : AccountBaseHandler, IRequestHandler<UpdateProfileCommand, Result<string>>
    {

        protected readonly ITokenGeneratorService _tokenGenerator;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly ApplicationContext _context;

        public UpdateProfileHandler(UserManager<AppUser> userManager, IConfiguration configuration,
            ApplicationContext context, ITokenGeneratorService tokenGenerator,
            IHttpContextAccessor _httpContextAccessor) : base(userManager, configuration)
        {
            _tokenGenerator = tokenGenerator;
            this._httpContextAccessor = _httpContextAccessor;
            _context = context;
        }

        public async Task<Result<string>> Handle(UpdateProfileCommand request, CancellationToken cancellationToken)
        {
            string? userEmail = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.Email).Value;

            if (userEmail != null) {
                var user = await _userManager.FindByEmailAsync(userEmail);

                if (user == null)
                {
                    return await Result<string>.FailAsync("User with this email does not exist.");
                }

                if (!user.EmailConfirmed)
                {
                    return await Result<string>.FailAsync("Email not confirmed");
                }

                if (!user.IsActive)
                {
                    return await Result<string>.FailAsync("Account not active");
                }
                AppUser? updateUser = await FromUpdateProfileCommandToAppUser(request, userEmail);
                await _userManager.UpdateAsync(updateUser!);
                await _context.SaveChangesAsync(cancellationToken);
                return await Result<string>.SuccessAsync("Successfully Update Profile");
            }

            return await Result<string>.FailAsync("Email does not exist");
        }
    }
}

