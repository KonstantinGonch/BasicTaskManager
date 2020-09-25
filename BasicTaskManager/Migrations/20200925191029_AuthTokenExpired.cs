using Microsoft.EntityFrameworkCore.Migrations;

namespace BasicTaskManager.Migrations
{
    public partial class AuthTokenExpired : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsExpired",
                table: "AuthTokens",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsExpired",
                table: "AuthTokens");
        }
    }
}
