using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.UserPrivacy.Command.EditUserPrivacy
{
    public class EditUserPrivacyCommand : IRequest<IResult>
    {
        public bool ShowContactInfo { get; set; }
        public bool ShowGithub { get; set; }
        public bool ShowInstagram { get; set; }
        public bool ShowLinkedIn { get; set; }
        public bool ShowTwitter { get; set; }
    }
}