using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RetailShopAPP.Server.Model;

namespace RetailShopAPP.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceController : ControllerBase
    {
        private readonly InvoiceDbContext _context;
        public InvoiceController(InvoiceDbContext context)
        {
            _context = context;
        }
        [HttpPost]
        public async Task<ActionResult<Invoice>> PostInvoice([FromBody]Invoice invoice)
        {
            if (_context.Invoices == null)
            {
                return Problem("Entity set is null");
            }
            _context.Invoices.Add(invoice);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBookDetail", new { id = invoice.InvoiceId }, invoice);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Invoice>>>GetInvoiceDetails()
        {
            if(_context.Invoices == null)
            {
                return NotFound();
            }
            var invoice = await _context.Invoices.ToListAsync();
            return Ok();
        }
    }
}
