using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace mms.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class ProgramUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reports_Programmes_ProgrammeId",
                table: "Reports");

            migrationBuilder.DropForeignKey(
                name: "FK_UserTasks_Programmes_ProgrammeId",
                table: "UserTasks");

            migrationBuilder.UpdateData(
                table: "UserTasks",
                keyColumn: "ProgrammeId",
                keyValue: null,
                column: "ProgrammeId",
                value: "");

            migrationBuilder.AlterColumn<string>(
                name: "ProgrammeId",
                table: "UserTasks",
                type: "varchar(255)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(255)",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.UpdateData(
                table: "Reports",
                keyColumn: "ProgrammeId",
                keyValue: null,
                column: "ProgrammeId",
                value: "");

            migrationBuilder.AlterColumn<string>(
                name: "ProgrammeId",
                table: "Reports",
                type: "varchar(255)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(255)",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "MentorManagerId",
                table: "ProgramsMentors",
                type: "varchar(255)",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "MentorManagerId",
                table: "Programmes",
                type: "varchar(255)",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "MentorManagers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    AppUserId = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MentorManagers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MentorManagers_AspNetUsers_AppUserId",
                        column: x => x.AppUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_ProgramsMentors_MentorManagerId",
                table: "ProgramsMentors",
                column: "MentorManagerId");

            migrationBuilder.CreateIndex(
                name: "IX_Programmes_MentorManagerId",
                table: "Programmes",
                column: "MentorManagerId");

            migrationBuilder.CreateIndex(
                name: "IX_MentorManagers_AppUserId",
                table: "MentorManagers",
                column: "AppUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Programmes_MentorManagers_MentorManagerId",
                table: "Programmes",
                column: "MentorManagerId",
                principalTable: "MentorManagers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ProgramsMentors_MentorManagers_MentorManagerId",
                table: "ProgramsMentors",
                column: "MentorManagerId",
                principalTable: "MentorManagers",
                principalColumn: "Id");

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
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Programmes_MentorManagers_MentorManagerId",
                table: "Programmes");

            migrationBuilder.DropForeignKey(
                name: "FK_ProgramsMentors_MentorManagers_MentorManagerId",
                table: "ProgramsMentors");

            migrationBuilder.DropForeignKey(
                name: "FK_Reports_Programmes_ProgrammeId",
                table: "Reports");

            migrationBuilder.DropForeignKey(
                name: "FK_UserTasks_Programmes_ProgrammeId",
                table: "UserTasks");

            migrationBuilder.DropTable(
                name: "MentorManagers");

            migrationBuilder.DropIndex(
                name: "IX_ProgramsMentors_MentorManagerId",
                table: "ProgramsMentors");

            migrationBuilder.DropIndex(
                name: "IX_Programmes_MentorManagerId",
                table: "Programmes");

            migrationBuilder.DropColumn(
                name: "MentorManagerId",
                table: "ProgramsMentors");

            migrationBuilder.DropColumn(
                name: "MentorManagerId",
                table: "Programmes");

            migrationBuilder.AlterColumn<string>(
                name: "ProgrammeId",
                table: "UserTasks",
                type: "varchar(255)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(255)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ProgrammeId",
                table: "Reports",
                type: "varchar(255)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(255)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddForeignKey(
                name: "FK_Reports_Programmes_ProgrammeId",
                table: "Reports",
                column: "ProgrammeId",
                principalTable: "Programmes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_UserTasks_Programmes_ProgrammeId",
                table: "UserTasks",
                column: "ProgrammeId",
                principalTable: "Programmes",
                principalColumn: "Id");
        }
    }
}
