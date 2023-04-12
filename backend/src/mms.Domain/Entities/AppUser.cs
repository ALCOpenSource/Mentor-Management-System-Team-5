using Microsoft.AspNetCore.Identity;

namespace mms.Domain.Entities
{
    public class AppUser : IdentityUser
    {
        public DateTime DateCreated { get; set; }
        public string Role { get; set; }
        public bool ProfileComplete { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string GitHub { get; set; }
        public string Facebook { get; set; }
        public string Twitter { get; set; }
        public string LinkedIn { get; set; }
        public string Website { get; set; }
        public string Bio { get; set; }
        public string Headline { get; set; }
    }
}