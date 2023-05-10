using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.MentorManagers.Query
{
    public class GetMentorManagersCommand : IRequest<IResult<List<GetMentorManagersResponse>>>
    {
    }
}
