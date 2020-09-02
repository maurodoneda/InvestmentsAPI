using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Investments",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Asset = table.Column<string>(nullable: true),
                    AssetClass = table.Column<string>(nullable: true),
                    OperationType = table.Column<string>(nullable: true),
                    Market = table.Column<string>(nullable: true),
                    Currency = table.Column<string>(nullable: true),
                    Quantity = table.Column<int>(nullable: false),
                    Price = table.Column<decimal>(nullable: false),
                    LiquidationCosts = table.Column<decimal>(nullable: false),
                    RegistryCost = table.Column<decimal>(nullable: false),
                    EmolumentsCost = table.Column<decimal>(nullable: false),
                    CapitalGainTax = table.Column<decimal>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    Broker = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Investments", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Investments");
        }
    }
}
