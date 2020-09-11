using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence;
using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using MediatR;
using Application.Investments;

namespace API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class InvestmentsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public InvestmentsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Investment>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpGet("{list}")]
        public async Task<ActionResult<List<Investment>>> CurrentOpenPos()
        {
            return await _mediator.Send(new CurrentOpenPos.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Investment>> Details(int id)
        {
           return await _mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Update(Update.Command command, int id)
        {
            command.Id = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(int id)
        {
            return await _mediator.Send(new Delete.Command{Id = id});
        }
    }
}