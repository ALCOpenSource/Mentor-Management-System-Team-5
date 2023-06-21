using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Profile.Query.GetAllProfiles
{
    public class GetAllProfilesCommand : IRequest<IResult<IList<GetAllProfilesResponse>>>
    {
    }
}