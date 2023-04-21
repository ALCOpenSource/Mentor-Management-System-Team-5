using mms.Domain.Common;

namespace mms.Domain.Entities
{
    public class UserPrivacy : BaseEntity
    {
        public string AppUserId { get; set; }
        public bool ShowContactInfo { get; set; }
        public bool ShowGithub { get; set; }
        public bool ShowInstagram { get; set; }
        public bool ShowLinkedIn { get; set; }
        public bool ShowTwitter { get; set; }
    }
}