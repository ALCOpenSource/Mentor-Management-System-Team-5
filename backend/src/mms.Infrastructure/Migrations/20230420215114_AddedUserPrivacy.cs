using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace mms.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddedUserPrivacy : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UserPrivacy",
                columns: table => new
                {
                    Id = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    AppUserId = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ShowContactInfo = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    ShowGithub = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    ShowInstagram = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    ShowLinkedIn = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    ShowTwitter = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserPrivacy", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_UserPrivacy_AppUserId",
                table: "UserPrivacy",
                column: "AppUserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserPrivacy");
        }
    }
}
