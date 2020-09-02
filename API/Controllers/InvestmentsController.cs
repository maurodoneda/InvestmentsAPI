using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence;
using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class InvestmentsController : Controller
    {
        private readonly DataContext _context;
        private InvestmentsController(DataContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Investment>>> Get()
        {

           var investmentList = await _context.Investments.OrderByDescending(x => x.Asset).ToListAsync(); 

            return Ok(investmentList);
        } 

        [HttpGet("{id}")]
        public async Task<ActionResult<Investment>> Get(int id)
        {

           var investment = await _context.Investments.FindAsync(id); 

            return Ok(investment);
        } 
    }
}