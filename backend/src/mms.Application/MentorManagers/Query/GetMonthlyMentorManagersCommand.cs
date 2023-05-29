using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.MentorManagers.Query
{
    public class GetMonthlyMentorManagersCommand : IRequest<IResult<List<GetMentorManagersResponse>>>
    {
    }
}
