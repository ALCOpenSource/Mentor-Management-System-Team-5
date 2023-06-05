using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace mms.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class ProgramEntityRename : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProgramsMentors_Programmes_ProgrammeId",
                table: "ProgramsMentors");

            migrationBuilder.DropForeignKey(
                name: "FK_Reports_Programmes_ProgrammeId",
                table: "Reports");

            migrationBuilder.DropForeignKey(
                name: "FK_UserTasks_Programmes_ProgrammeId",
                table: "UserTasks");

            migrationBuilder.DropTable(
                name: "MentorManagerProgramme");

            migrationBuilder.DropTable(
                name: "Programmes");

            migrationBuilder.DropIndex(
                name: "IX_UserTasks_ProgrammeId",
                table: "UserTasks");

            migrationBuilder.DropIndex(
                name: "IX_Reports_ProgrammeId",
                table: "Reports");

            migrationBuilder.DropIndex(
                name: "IX_ProgramsMentors_ProgrammeId",
                table: "ProgramsMentors");

            migrationBuilder.DropColumn(
                name: "ProgrammeId",
                table: "UserTasks");

            migrationBuilder.DropColumn(
                name: "ProgrammeId",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "ProgrammeId",
                table: "ProgramsMentors");

            migrationBuilder.RenameColumn(
                name: "ProgrammeId",
                table: "ProgrammeApplications",
                newName: "ProgramId");

            migrationBuilder.RenameIndex(
                name: "IX_ProgrammeApplications_ProgrammeId",
                table: "ProgrammeApplications",
                newName: "IX_ProgrammeApplications_ProgramId");

            migrationBuilder.AlterColumn<string>(
                name: "ProgramId",
                table: "UserTasks",
                type: "varchar(255)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Programs",
                columns: table => new
                {
                    Id = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Name = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Description = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    CreatedBy = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Status = table.Column<int>(type: "int", nullable: false),
                    ArchivedBy = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ProgrammePicture = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    DateCreated = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    DateCompleted = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    DateArchived = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    Criteria = table.Column<string>(type: "json", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    AppUserId = table.Column<string>(type: "varchar(255)", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Programs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Programs_AspNetUsers_AppUserId",
                        column: x => x.AppUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "MentorManagerProgram",
                columns: table => new
                {
                    MentorManagersId = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ProgramsId = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MentorManagerProgram", x => new { x.MentorManagersId, x.ProgramsId });
                    table.ForeignKey(
                        name: "FK_MentorManagerProgram_MentorManagers_MentorManagersId",
                        column: x => x.MentorManagersId,
                        principalTable: "MentorManagers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MentorManagerProgram_Programs_ProgramsId",
                        column: x => x.ProgramsId,
                        principalTable: "Programs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_UserTasks_ProgramId",
                table: "UserTasks",
                column: "ProgramId");

            migrationBuilder.CreateIndex(
                name: "IX_MentorManagerProgram_ProgramsId",
                table: "MentorManagerProgram",
                column: "ProgramsId");

            migrationBuilder.CreateIndex(
                name: "IX_Programs_AppUserId",
                table: "Programs",
                column: "AppUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProgramsMentors_Programs_ProgramId",
                table: "ProgramsMentors",
                column: "ProgramId",
                principalTable: "Programs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reports_Programs_ProgramId",
                table: "Reports",
                column: "ProgramId",
                principalTable: "Programs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserTasks_Programs_ProgramId",
                table: "UserTasks",
                column: "ProgramId",
                principalTable: "Programs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProgramsMentors_Programs_ProgramId",
                table: "ProgramsMentors");

            migrationBuilder.DropForeignKey(
                name: "FK_Reports_Programs_ProgramId",
                table: "Reports");

            migrationBuilder.DropForeignKey(
                name: "FK_UserTasks_Programs_ProgramId",
                table: "UserTasks");

            migrationBuilder.DropTable(
                name: "MentorManagerProgram");

            migrationBuilder.DropTable(
                name: "Programs");

            migrationBuilder.DropIndex(
                name: "IX_UserTasks_ProgramId",
                table: "UserTasks");

            migrationBuilder.RenameColumn(
                name: "ProgramId",
                table: "ProgrammeApplications",
                newName: "ProgrammeId");

            migrationBuilder.RenameIndex(
                name: "IX_ProgrammeApplications_ProgramId",
                table: "ProgrammeApplications",
                newName: "IX_ProgrammeApplications_ProgrammeId");

            migrationBuilder.AlterColumn<string>(
                name: "ProgramId",
                table: "UserTasks",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(255)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "ProgrammeId",
                table: "UserTasks",
                type: "varchar(255)",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "ProgrammeId",
                table: "Reports",
                type: "varchar(255)",
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "ProgrammeId",
                table: "ProgramsMentors",
                type: "varchar(255)",
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Programmes",
                columns: table => new
                {
                    Id = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    AppUserId = table.Column<string>(type: "varchar(255)", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ArchivedBy = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    CreatedBy = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Criteria = table.Column<string>(type: "json", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    DateArchived = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    DateCompleted = table.Column<DateTime>(type: "datetime(6)", nullable: true),
                    DateCreated = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    Description = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Name = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ProgrammePicture = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Status = table.Column<int>(type: "int", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Programmes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Programmes_AspNetUsers_AppUserId",
                        column: x => x.AppUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "MentorManagerProgramme",
                columns: table => new
                {
                    MentorManagersId = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ProgrammesId = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MentorManagerProgramme", x => new { x.MentorManagersId, x.ProgrammesId });
                    table.ForeignKey(
                        name: "FK_MentorManagerProgramme_MentorManagers_MentorManagersId",
                        column: x => x.MentorManagersId,
                        principalTable: "MentorManagers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MentorManagerProgramme_Programmes_ProgrammesId",
                        column: x => x.ProgrammesId,
                        principalTable: "Programmes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_UserTasks_ProgrammeId",
                table: "UserTasks",
                column: "ProgrammeId");

            migrationBuilder.CreateIndex(
                name: "IX_Reports_ProgrammeId",
                table: "Reports",
                column: "ProgrammeId");

            migrationBuilder.CreateIndex(
                name: "IX_ProgramsMentors_ProgrammeId",
                table: "ProgramsMentors",
                column: "ProgrammeId");

            migrationBuilder.CreateIndex(
                name: "IX_MentorManagerProgramme_ProgrammesId",
                table: "MentorManagerProgramme",
                column: "ProgrammesId");

            migrationBuilder.CreateIndex(
                name: "IX_Programmes_AppUserId",
                table: "Programmes",
                column: "AppUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProgramsMentors_Programmes_ProgrammeId",
                table: "ProgramsMentors",
                column: "ProgrammeId",
                principalTable: "Programmes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reports_Programmes_ProgrammeId",
                table: "Reports",
                column: "ProgrammeId",
                principalTable: "Programmes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserTasks_Programmes_ProgrammeId",
                table: "UserTasks",
                column: "ProgrammeId",
                principalTable: "Programmes",
                principalColumn: "Id");
        }
    }
}
