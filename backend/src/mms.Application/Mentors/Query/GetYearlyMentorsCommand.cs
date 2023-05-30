using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Mentors.Query
{
    public class GetYearlyMentorsCommand : IRequest<IResult<List<GetMentorsResponse>>>
    {
    }
}
