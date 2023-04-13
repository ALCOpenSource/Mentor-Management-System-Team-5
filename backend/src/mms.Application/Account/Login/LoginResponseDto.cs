namespace mms.Application.Account.Login
{
    public class LoginResponseDto
    {
        public string Id { get; set; }
        public IList<string> Roles { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
        public string RefreshToken { get; set; }
    }
}