using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using mms.Domain.Common;
using mms.Domain.Entities;

namespace mms.Infrastructure.Context
{
    public class ApplicationContext : IdentityDbContext<AppUser>
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
        }

        public DbSet<Certificate> Certificates { get; set; }
        public DbSet<JobRole> JobRoles { get; set; }
        public DbSet<Programme> Programmes { get; set; }
        public DbSet<ProgrammeApplication> ProgrammeApplications { get; set; }
        public DbSet<ProgramsMentor> ProgramsMentors { get; set; }
        public DbSet<Report> Reports { get; set; }
        public DbSet<UserTask> UserTasks { get; set; }
        public DbSet<TechStack> TechStacks { get; set; }
        public DbSet<UserDetail> UserDetails { get; set; }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            foreach (var item in ChangeTracker.Entries<BaseEntity>())
            {
                switch (item.State)
                {
                    case EntityState.Modified:
                        item.Entity.Id = Guid.NewGuid();
                        item.Entity.UpdatedAt = DateTime.UtcNow;
                        break;
                    case EntityState.Added:
                        item.Entity.CreatedAt = DateTime.UtcNow;
                        break;
                    default:
                        break;
                }
            }

            return await base.SaveChangesAsync(cancellationToken);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) =>
            optionsBuilder.LogTo(Console.WriteLine);

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProgrammeApplication>()
                .HasOne(p => p.Programme)
                .WithMany(p => p.ProgrammeApplications)
                .HasForeignKey(p => p.ProgrammeId);

            modelBuilder.Entity<ProgrammeApplication>()
                .HasIndex(x => x.AppUserId);

            modelBuilder.Entity<UserDetail>()
                .HasIndex(x => x.AppUserId);

            modelBuilder.Entity<UserTask>()
                .HasMany(x => x.Managers);

            base.OnModelCreating(modelBuilder);
        }
    }
}