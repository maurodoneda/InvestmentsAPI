using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Investments
{
    public class Details
    {
        public class Query : IRequest<Investment>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Investment>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Investment> Handle(Query request, CancellationToken cancellationToken)
            {
                var investment = await _context.Investments.FindAsync(request.Id);
                return investment;
            }
        }
    }
}