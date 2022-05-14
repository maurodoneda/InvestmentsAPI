using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Investments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Asset = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AssetClass = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OperationType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Market = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Currency = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    LiquidationCosts = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    RegistryCost = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    EmolumentsCost = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    CapitalGainTax = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Broker = table.Column<string>(type: "nvarchar(max)", nullable: true)
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
