using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace mms.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_UserTasks_UserTaskId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_ProgrammeApplications_Programmes_ProgrammeId",
                table: "ProgrammeApplications");

            migrationBuilder.DropForeignKey(
                name: "FK_ProgramsMentors_AspNetUsers_AppUserId",
                table: "ProgramsMentors");

            migrationBuilder.DropForeignKey(
                name: "FK_ProgramsMentors_Programmes_ProgrammeId",
                table: "ProgramsMentors");

            migrationBuilder.DropIndex(
                name: "IX_ProgramsMentors_ProgrammeId",
                table: "ProgramsMentors");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_UserTaskId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "TaskId",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "ProgrammeId",
                table: "ProgramsMentors");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Certificates");

            migrationBuilder.DropColumn(
                name: "UserTaskId",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<int>(
                name: "Status",
                table: "UserTasks",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "AppUserId",
                table: "UserTasks",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ProgramId",
                table: "Reports",
                type: "varchar(255)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "UserTaskId",
                table: "Reports",
                type: "varchar(255)",
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ProgramId",
                table: "ProgramsMentors",
                type: "varchar(255)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<int>(
                name: "Status",
                table: "Programmes",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "Criteria",
                table: "Programmes",
                type: "json",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<int>(
                name: "Status",
                table: "ProgrammeApplications",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "Answers",
                table: "ProgrammeApplications",
                type: "json",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<int>(
                name: "Status",
                table: "Certificates",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ProgramId",
                table: "Certificates",
                type: "varchar(255)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "AppUserId",
                table: "Certificates",
                type: "varchar(255)",
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "AppUserProgramme",
                columns: table => new
                {
                    AppUsersId = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ProgrammesId = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppUserProgramme", x => new { x.AppUsersId, x.ProgrammesId });
                    table.ForeignKey(
                        name: "FK_AppUserProgramme_AspNetUsers_AppUsersId",
                        column: x => x.AppUsersId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AppUserProgramme_Programmes_ProgrammesId",
                        column: x => x.ProgrammesId,
                        principalTable: "Programmes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "AppUserUserTask",
                columns: table => new
                {
                    AppUsersId = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    UserTasksId = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppUserUserTask", x => new { x.AppUsersId, x.UserTasksId });
                    table.ForeignKey(
                        name: "FK_AppUserUserTask_AspNetUsers_AppUsersId",
                        column: x => x.AppUsersId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AppUserUserTask_UserTasks_UserTasksId",
                        column: x => x.UserTasksId,
                        principalTable: "UserTasks",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Reports_ProgramId",
                table: "Reports",
                column: "ProgramId");

            migrationBuilder.CreateIndex(
                name: "IX_Reports_UserTaskId",
                table: "Reports",
                column: "UserTaskId");

            migrationBuilder.CreateIndex(
                name: "IX_ProgramsMentors_ProgramId",
                table: "ProgramsMentors",
                column: "ProgramId");

            migrationBuilder.CreateIndex(
                name: "IX_Certificates_AppUserId",
                table: "Certificates",
                column: "AppUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Certificates_ProgramId",
                table: "Certificates",
                column: "ProgramId");

            migrationBuilder.CreateIndex(
                name: "IX_AppUserProgramme_ProgrammesId",
                table: "AppUserProgramme",
                column: "ProgrammesId");

            migrationBuilder.CreateIndex(
                name: "IX_AppUserUserTask_UserTasksId",
                table: "AppUserUserTask",
                column: "UserTasksId");

            migrationBuilder.AddForeignKey(
                name: "FK_Reports_UserTasks_UserTaskId",
                table: "Reports",
                column: "UserTaskId",
                principalTable: "UserTasks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reports_UserTasks_UserTaskId",
                table: "Reports");

            migrationBuilder.DropTable(
                name: "AppUserProgramme");

            migrationBuilder.DropTable(
                name: "AppUserUserTask");

            migrationBuilder.DropIndex(
                name: "IX_Reports_ProgramId",
                table: "Reports");

            migrationBuilder.DropIndex(
                name: "IX_Reports_UserTaskId",
                table: "Reports");

            migrationBuilder.DropIndex(
                name: "IX_ProgramsMentors_ProgramId",
                table: "ProgramsMentors");

            migrationBuilder.DropIndex(
                name: "IX_Certificates_AppUserId",
                table: "Certificates");

            migrationBuilder.DropIndex(
                name: "IX_Certificates_ProgramId",
                table: "Certificates");

            migrationBuilder.DropColumn(
                name: "AppUserId",
                table: "UserTasks");

            migrationBuilder.DropColumn(
                name: "UserTaskId",
                table: "Reports");

            migrationBuilder.DropColumn(
                name: "AppUserId",
                table: "Certificates");

            migrationBuilder.AlterColumn<string>(
                name: "Status",
                table: "UserTasks",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ProgramId",
                table: "Reports",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(255)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "TaskId",
                table: "Reports",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ProgramId",
                table: "ProgramsMentors",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(255)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "ProgrammeId",
                table: "ProgramsMentors",
                type: "varchar(255)",
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "Status",
                table: "Programmes",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "Criteria",
                table: "Programmes",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "json")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "Status",
                table: "ProgrammeApplications",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "Answers",
                table: "ProgrammeApplications",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "json")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "Status",
                table: "Certificates",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "ProgramId",
                table: "Certificates",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(255)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Certificates",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "UserTaskId",
                table: "AspNetUsers",
                type: "varchar(255)",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_ProgramsMentors_ProgrammeId",
                table: "ProgramsMentors",
                column: "ProgrammeId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_UserTaskId",
                table: "AspNetUsers",
                column: "UserTaskId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_UserTasks_UserTaskId",
                table: "AspNetUsers",
                column: "UserTaskId",
                principalTable: "UserTasks",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ProgrammeApplications_Programmes_ProgrammeId",
                table: "ProgrammeApplications",
                column: "ProgrammeId",
                principalTable: "Programmes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProgramsMentors_AspNetUsers_AppUserId",
                table: "ProgramsMentors",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProgramsMentors_Programmes_ProgrammeId",
                table: "ProgramsMentors",
                column: "ProgrammeId",
                principalTable: "Programmes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
