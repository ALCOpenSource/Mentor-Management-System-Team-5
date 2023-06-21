using AspNetCoreHero.Results;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using mms.Domain.Entities;
using mms.Infrastructure.Context;

namespace mms.Application.Profile.Query.GetAllProfiles
{
    public class
        GetAllProfilesCommandHandler : IRequestHandler<GetAllProfilesCommand, IResult<IList<GetAllProfilesResponse>>>

    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IMapper _mapper;

        public GetAllProfilesCommandHandler(UserManager<AppUser> userManager,
            IMapper mapper)
        {
            _userManager = userManager;
            _mapper = mapper;
        }

        public async Task<IResult<IList<GetAllProfilesResponse>>> Handle(GetAllProfilesCommand request,
            CancellationToken cancellationToken)
        {
            var users = await _userManager.Users.ToListAsync(cancellationToken);
            if (!users.Any())
            {
                return Result<IList<GetAllProfilesResponse>>.Fail("No user found");
            }

            var result = new List<GetAllProfilesResponse>();
            foreach (var user in users)
            {
                var roles = await _userManager.GetRolesAsync(user);
                var profile = _mapper.Map<GetAllProfilesResponse>(user);
                profile.Roles = roles;
                result.Add(profile);
            }

            return Result<IList<GetAllProfilesResponse>>.Success(result, "Successfully fetched datas");
        }
    }
}