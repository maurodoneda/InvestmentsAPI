using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Investments
{
    public class List
    {
         public class Query : IRequest<List<Investment>>
        {
        }

        public class Handler : IRequestHandler<Query, List<Investment>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Investment>> Handle(Query request, CancellationToken cancellationToken)
            {
                var investments = await _context.Investments.OrderBy(x => x.Asset).ToListAsync();

                return investments;
            }
        }
    }
}