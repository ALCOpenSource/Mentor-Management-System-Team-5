using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace mms.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddedUserNotification : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UserNotifications",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
                    UserId = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
                    AllNotificationEmail = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    AllNotificationInApp = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    ProgramEmail = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    ProgramInApp = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    TaskEmail = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    TaskInApp = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    ApprovalRequestEmail = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    ApprovalRequestInApp = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    ReportsEmail = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    ReportsInApp = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    PostCommentsEmail = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    PostCommentsInApp = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    PostsEmail = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    PostsInApp = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    MentionsEmail = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    MentionsInApp = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    DirectMessageEmail = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    DirectMessageInApp = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserNotifications", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_UserNotifications_UserId",
                table: "UserNotifications",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserNotifications");
        }
    }
}
