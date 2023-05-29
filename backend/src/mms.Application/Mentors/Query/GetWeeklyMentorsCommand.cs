using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Mentors.Query
{
    public class GetWeeklyMentorsCommand : IRequest<IResult<List<GetMentorsResponse>>>
    {
    }
}
