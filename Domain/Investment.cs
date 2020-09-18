using System;
using System.ComponentModel;

namespace Domain
{
    public class Investment
    {
        public int Id { get; set; }
        public string Asset { get; set; }
        public string AssetClass { get; set; }
        public string OperationType { get; set; }
        public string Market { get; set; }
        public string Currency { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public decimal LiquidationCosts { get; set; }
        [DisplayName("Registry Cost")]
        public decimal RegistryCost { get; set; }
        public decimal EmolumentsCost { get; set; }
        public decimal CapitalGainTax { get; set; }
        public DateTime Date { get; set; }
        public string Broker { get; set; }


        public Investment()
        {
        }
    }



}
