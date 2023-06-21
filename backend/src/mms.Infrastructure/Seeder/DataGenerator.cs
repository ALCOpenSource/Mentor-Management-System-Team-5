using Bogus;
using mms.Domain.Entities;

namespace mms.Infrastructure.Seeder
{
    public static class DataGenerator
    {
        public static readonly List<AppUser> MentorsAndManagers = new();

        public const int NumberOfMentorsAndManagers = 60;

        public static void InitMentorsAndManagersData()
        {
            var mentorsAndManagersGenerator = GetMentorsAndManagersGenerator();
            var generatedMentorsAndManagers = mentorsAndManagersGenerator.Generate(NumberOfMentorsAndManagers);
            MentorsAndManagers.AddRange(generatedMentorsAndManagers);
        }

        private static Faker<AppUser> GetMentorsAndManagersGenerator()
        {
            return new Faker<AppUser>()
                .RuleFor(e => e.Id, _ => Guid.NewGuid().ToString())
                .RuleFor(e => e.About, f => f.Lorem.Paragraph(1))
                .RuleFor(e => e.FirstName, f => f.Name.FirstName())
                .RuleFor(e => e.LastName, f => f.Name.LastName())
                .RuleFor(e => e.IsActive, f => true)
                .RuleFor(e => e.DateCreated, f => DateTime.Now)
                .RuleFor(e => e.Email, (f, e) => f.Internet.Email(e.FirstName, e.LastName))
                .RuleFor(e => e.EmailConfirmed, f => true)
                .RuleFor(e => e.UserName, (f, e) => e.FirstName)
                .RuleFor(e => e.Country, f => f.Address.Country())
                .RuleFor(e => e.City, f => f.Address.City())
                .RuleFor(e => e.State, (f, e) => e.City);
        }
    }
}