using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace mms.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class MessagesV1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "PinnedMessageId",
                table: "MessageThreads",
                type: "varchar(255)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(255)")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "MessageThreads",
                keyColumn: "PinnedMessageId",
                keyValue: null,
                column: "PinnedMessageId",
                value: "");

            migrationBuilder.AlterColumn<string>(
                name: "PinnedMessageId",
                table: "MessageThreads",
                type: "varchar(255)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(255)",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");
        }
    }
}
