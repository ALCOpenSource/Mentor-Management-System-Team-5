using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.UserPrivacy.Query
{
    public class GetUserPrivacyCommand : IRequest<IResult<GetUserPrivacyResponse>>
    {
    }
}