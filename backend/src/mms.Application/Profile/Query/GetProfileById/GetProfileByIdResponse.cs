namespace mms.Application.Profile.Query.GetProfileById
{
    public class GetProfileByIdResponse
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public bool IsActive { get; set; }
        public DateTime DateCreated { get; set; }
        public bool ProfileComplete { get; set; }
        public string? Country { get; set; }
        public string? State { get; set; }
        public string? City { get; set; }
        public string? Github { get; set; }
        public string? Instagram { get; set; }
        public string? Twitter { get; set; }
        public string? LinkedIn { get; set; }
        public string? Website { get; set; }
        public string? Bio { get; set; }
        public string? About { get; set; }
        public string? Headline { get; set; }
        public string? ProfilePicture { get; set; }
    }
}