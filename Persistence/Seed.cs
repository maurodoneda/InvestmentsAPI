using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if(!context.Investments.Any())
            {
                var investmentList = new List<Investment>
                {
                    new Investment
                    {
                        Asset = "PETR4",
                        Quantity = 500,
                        Price = 11.90M,
                        LiquidationCosts = 2.20M,
                        RegistryCost = 1.20M,
                        EmolumentsCost = 0.60M,
                        CapitalGainTax =0,
                        Date = DateTime.Now.AddMonths(-5),
                        OperationType = "Buy",
                        AssetClass = "Stocks",
                        Market = "IBOV",
                        Currency = "BRL"
                    },

                     new Investment
                    {
                        Asset = "BBDC4",
                        Quantity = 500,
                        Price = 19.80M,
                        LiquidationCosts = 2.20M,
                        RegistryCost = 1.20M,
                        EmolumentsCost = 0.60M,
                        CapitalGainTax =0,
                        Date = DateTime.Now.AddMonths(-4),
                        OperationType = "Buy",
                        AssetClass = "Stocks",
                        Market = "IBOV",
                        Currency = "BRL"
                    },

                       new Investment
                    {
                        Asset = "WEGE3",
                        Quantity = 200,
                        Price = 28.90M,
                        LiquidationCosts = 2.20M,
                        RegistryCost = 1.20M,
                        EmolumentsCost = 0.60M,
                        CapitalGainTax =0,
                        Date = DateTime.Now.AddMonths(-6),
                        OperationType = "Buy",
                        AssetClass = "Stocks",
                        Market = "IBOV",
                        Currency = "BRL"
                    },

                       new Investment
                    {
                        Asset = "PBR",
                        Quantity = 100,
                        Price = 1.35M,
                        LiquidationCosts = 2.20M,
                        RegistryCost = 1.20M,
                        EmolumentsCost = 0.60M,
                        CapitalGainTax =0,
                        Date = DateTime.Now.AddMonths(-5),
                        OperationType = "Buy",
                        AssetClass = "Option",
                        Market = "NYSE",
                        Currency = "USD"
                    },

                       new Investment
                    {
                        Asset = "PETR4",
                        Quantity = 500,
                        Price = 17.80M,
                        LiquidationCosts = 2.20M,
                        RegistryCost = 1.20M,
                        EmolumentsCost = 0.60M,
                        CapitalGainTax =0,
                        Date = DateTime.Now.AddMonths(-2),
                        OperationType = "Sell",
                        AssetClass = "Stocks",
                        Market = "IBOV",
                        Currency = "BRL"
                    }

                };
                
                context.Investments.AddRange(investmentList);
                context.SaveChanges();
            }
        }
    }
}