using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Mentors.Query
{
    public class GetMonthlyMentorsCommand : IRequest<IResult<List<GetMentorsResponse>>>
    {
    }
}
