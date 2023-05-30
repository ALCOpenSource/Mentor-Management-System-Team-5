using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.MentorManagers.Query
{
    public class GetYearlyMentorManagersCommand : IRequest<IResult<List<GetMentorManagersResponse>>>
    {
    }
}
