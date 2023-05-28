using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.MentorManagers.Query
{
    public class GetWeeklyMentorManagersCommand : IRequest<IResult<List<GetMentorManagersResponse>>>
    {
    }
}
