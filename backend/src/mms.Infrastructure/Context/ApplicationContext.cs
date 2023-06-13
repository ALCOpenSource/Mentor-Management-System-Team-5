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
        public DbSet<Program> Programs { get; set; }
        public DbSet<ProgrammeApplication> ProgrammeApplications { get; set; }
        public DbSet<ProgramsMentor> ProgramsMentors { get; set; }
        public DbSet<MentorManager> MentorManagers { get; set; }
        public DbSet<Report> Reports { get; set; }
        public DbSet<UserTask> UserTasks { get; set; }
        public DbSet<TechStack> TechStacks { get; set; }
        public DbSet<UserDetail> UserDetails { get; set; }
        public DbSet<UserNotification> UserNotifications { get; set; }
        public DbSet<UserPrivacy> UserPrivacy { get; set; }
        public DbSet<Support> Supports { get; set; }
        public DbSet<FAQ> FAQs { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<MessageThread> MessageThreads { get; set; }
        public DbSet<MessageThreadParticipant> MessageThreadParticipants { get; set; }

        public async Task<int> SaveChangesAsync()
        {
            return await SaveChangesAsync(default(CancellationToken));
        }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken)
        {
            foreach (var item in ChangeTracker.Entries<BaseEntity>())
            {
                switch (item.State)
                {
                    case EntityState.Modified:
                        item.Entity.UpdatedAt = DateTime.UtcNow;
                        break;
                    case EntityState.Added:
                        item.Entity.CreatedAt = DateTime.UtcNow;
                        break;
                    case EntityState.Deleted:
                        break;
                    default:
                        throw new NotSupportedException();
                }
            }

            return await base.SaveChangesAsync(cancellationToken);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) =>
            optionsBuilder.LogTo(Console.WriteLine);

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Certificate>()
                .HasIndex(x => x.AppUserId);

            modelBuilder.Entity<Certificate>()
                .HasIndex(x => x.ProgramId);

            modelBuilder.Entity<Program>()
                 .Property(p => p.Criteria)
                 .HasColumnType("json");

            modelBuilder.Entity<Program>()
                .HasMany(x => x.Reports);

            modelBuilder.Entity<Program>()
                .HasMany(x => x.MentorManagers);
            modelBuilder.Entity<Program>()
              .HasMany(x => x.Mentors);

            modelBuilder.Entity<ProgrammeApplication>()
                .HasIndex(p => p.ProgramId);

            modelBuilder.Entity<ProgrammeApplication>()
                .HasIndex(x => x.AppUserId);

            modelBuilder.Entity<ProgramsMentor>()
                .HasIndex(x => x.ProgramId);

            modelBuilder.Entity<ProgramsMentor>()
                .HasIndex(x => x.AppUserId);

            modelBuilder.Entity<MentorManager>()
                .HasIndex(x => x.AppUserId);
            modelBuilder.Entity<MentorManager>()
                .HasMany(x => x.UserTasks);

            modelBuilder.Entity<MentorManager>()
                .HasMany(x => x.ProgramsMentors);

            modelBuilder.Entity<MentorManager>()
                .HasMany(x => x.Programs).WithMany(y => y.MentorManagers);
            modelBuilder.Entity<Report>()
                .Property(m => m.UserTaskId).IsRequired(false); 
            modelBuilder.Entity<Report>()
                .Property(m => m.ProgramId).IsRequired(false);

            modelBuilder.Entity<Report>()
                .HasIndex(x => x.UserTaskId);

            modelBuilder.Entity<Report>()
                .HasIndex(x => x.ProgramId);

            modelBuilder.Entity<UserDetail>()
                .HasIndex(x => x.AppUserId);

            modelBuilder.Entity<UserTask>()
                .HasMany(x => x.MentorManagers)
                .WithMany(x => x.UserTasks);

            modelBuilder.Entity<UserTask>()
                .HasMany(x => x.Mentors)
                .WithMany(x => x.UserTasks);

            modelBuilder.Entity<UserTask>()
                .HasMany(x => x.Reports)
                .WithOne(x => x.UserTask)
                .HasForeignKey(x => x.UserTaskId);

            modelBuilder.Entity<UserNotification>()
                .HasIndex(x => x.AppUserId);

            modelBuilder.Entity<UserPrivacy>()
                .HasIndex(x => x.AppUserId);

            modelBuilder.Entity<Message>().HasIndex(x => x.SenderId);

            modelBuilder.Entity<Message>().HasIndex(x => x.MessageThreadId);

            modelBuilder.Entity<MessageThread>().HasIndex(x => x.LastMessageId);

            modelBuilder.Entity<MessageThread>().HasIndex(x => x.PinnedMessageId);

            modelBuilder.Entity<MessageThread>().HasIndex(x => x.MessageThreadParticipantHash).IsUnique();

            modelBuilder.Entity<MessageThreadParticipant>().HasIndex(x => x.MessageThreadId);

            modelBuilder.Entity<MessageThreadParticipant>().HasIndex(x => x.AppUserId);

            modelBuilder.Entity<MessageThreadParticipant>().HasOne(x => x.MessageThread);

            base.OnModelCreating(modelBuilder);
        }
    }
}