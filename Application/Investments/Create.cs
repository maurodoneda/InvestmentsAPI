using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Investments
{
    public class Create
    {
        public class Command : IRequest
        {
 
            public string Asset { get; set; }
            public string AssetClass { get; set; }
            public string OperationType { get; set; }
            public string Market { get; set; }
            public string Currency { get; set; }
            public int Quantity { get; set; }
            public decimal Price { get; set; }
            public decimal LiquidationCosts { get; set; }
            public decimal RegistryCost { get; set; }
            public decimal EmolumentsCost { get; set; }
            public decimal CapitalGainTax { get; set; }
            public DateTime Date { get; set; }
            public string Broker { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                 var newInvestment = new Investment
                {
    
                    Asset = request.Asset,
                    AssetClass = request.AssetClass,
                    OperationType = request.OperationType,
                    Market = request.Market,
                    Currency = request.Currency,
                    Quantity = request.Quantity,
                    Price = request.Price,
                    LiquidationCosts = request.LiquidationCosts,
                    RegistryCost = request.RegistryCost,
                    EmolumentsCost = request.RegistryCost,
                    CapitalGainTax = request.CapitalGainTax,
                    Date = request.Date,
                    Broker = request.Broker
                };
                
                _context.Add(newInvestment);
                var success = await _context.SaveChangesAsync() > 0;

                if(success)
                    return Unit.Value;
                
                throw new Exception("A problem ocurred saving changes");
            }
        }
    }
}