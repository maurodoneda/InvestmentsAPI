using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Investments
{
    public class Update
    {
        public class Command : IRequest
        {
            public int Id { get; set; }
            public string Asset { get; set; }
            public string AssetClass { get; set; }
            public string OperationType { get; set; }
            public string Market { get; set; }
            public string Currency { get; set; }
            public int? Quantity { get; set; }
            public decimal? Price { get; set; }
            public decimal? LiquidationCosts { get; set; }
            public decimal? RegistryCost { get; set; }
            public decimal? EmolumentsCost { get; set; }
            public decimal? CapitalGainTax { get; set; }
            public DateTime? Date { get; set; }
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
                //handler logic goes here

                var investment = await _context.Investments.FindAsync(request.Id);

                if (investment == null)
                    throw new Exception("Could no find this entry");

                investment.Asset = request.Asset ?? investment.Asset;
                investment.AssetClass = request.AssetClass ?? investment.AssetClass;
                investment.OperationType = request.OperationType ?? investment.OperationType;
                investment.Market = request.Market ?? investment.Market;
                investment.Currency = request.Currency ?? investment.Currency;
                investment.Quantity = request.Quantity ?? investment.Quantity;
                investment.Price = request.Price ?? investment.Price;
                investment.LiquidationCosts = request.LiquidationCosts ?? investment.LiquidationCosts;
                investment.RegistryCost = request.RegistryCost ?? investment.RegistryCost;
                investment.EmolumentsCost = request.RegistryCost ?? investment.EmolumentsCost;
                investment.CapitalGainTax = request.CapitalGainTax ?? investment.CapitalGainTax;
                investment.Date = request.Date ?? investment.Date;
                investment.Broker = request.Broker ?? investment.Broker;

                var success = await _context.SaveChangesAsync() > 0;

                if (success)
                    return Unit.Value;
                throw new Exception("A problem ocurred saving changes");
            }
        }
    }
}