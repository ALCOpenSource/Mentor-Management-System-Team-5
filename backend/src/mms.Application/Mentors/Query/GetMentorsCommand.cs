using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Mentors.Query
{
    public class GetMentorsCommand : IRequest<IResult<List<GetMentorsResponse>>>
    {
    }
}
