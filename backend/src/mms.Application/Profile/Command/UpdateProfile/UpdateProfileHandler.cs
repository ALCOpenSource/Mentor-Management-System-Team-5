using AspNetCoreHero.Results;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using mms.Domain.Entities;
using System.Security.Claims;
using AutoMapper;
using mms.Infrastructure.Interface;
using mms.Infrastructure.Context;

namespace mms.Application.Profile.Command.UpdateProfile
{
    public class UpdateProfileHandler : ProfileBaseHandler, IRequestHandler<UpdateProfileCommand, Result<string>>
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public UpdateProfileHandler(UserManager<AppUser> userManager, IConfiguration configuration,
            ICurrentUserService currentUserService, IMapper mapper, ApplicationContext context,
            IHttpContextAccessor _httpContextAccessor) : base(userManager, configuration, currentUserService, mapper)
        {
            this._httpContextAccessor = _httpContextAccessor;
            _context = context;
            _mapper = mapper;
        }

        public async Task<Result<string>> Handle(UpdateProfileCommand request, CancellationToken cancellationToken)
        {
            string? userEmail = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.Email).Value;

            if (userEmail != null)
            {
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

                AppUser? updateUser = await FromUpdateProfileCommandToAppUser(request, user);
                await _userManager.UpdateAsync(updateUser!);
                await _context.SaveChangesAsync(cancellationToken);
                return await Result<string>.SuccessAsync("Successfully Update Profile");
            }

            return await Result<string>.FailAsync("Invalid User");
        }
    }
}