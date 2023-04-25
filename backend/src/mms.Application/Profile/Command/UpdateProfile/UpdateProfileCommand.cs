using System;
using AspNetCoreHero.Results;
using MediatR;

namespace mms.Application.Profile.Command.UpdateProfile
{
    public class UpdateProfileCommand : IRequest<Result<string>>
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? About { get; set; }
        public string? Website { get; set; }
        public string? Country { get; set; }
        public string? City { get; set; }
        public string? Github { get; set; }
        public string? Facebook { get; set; }
        public string? Twitter { get; set; }
        public string? LinkedIn { get; set; }
        public string? Bio { get; set; }
        public string? Headline { get; set; }
        public string? ProfilePicture { get; set; }
    }
}