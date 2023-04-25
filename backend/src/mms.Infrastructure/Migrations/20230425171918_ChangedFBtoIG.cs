using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace mms.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class ChangedFBtoIG : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Facebook",
                table: "AspNetUsers",
                newName: "Instagram");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Instagram",
                table: "AspNetUsers",
                newName: "Facebook");
        }
    }
}
