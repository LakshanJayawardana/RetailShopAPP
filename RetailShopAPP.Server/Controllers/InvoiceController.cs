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
        [Route("AddInvoice")]
        public async Task<ActionResult<Invoice>> AddInvoice([FromBody]Invoice invoice)
        {
            if (invoice == null)
            {
                return BadRequest("Invoice data is missing.");
            }
            if (!invoice.IsValid())
            {
                return BadRequest("Invalid invoice data. The balance (totalAmount - discount) must be greater than zero.");
            }
            _context.Invoices.Add(invoice);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInvoices", new { id = invoice.InvoiceId }, invoice);
        }

        [HttpGet]
        [Route("GetInvoices")]
        public async Task<ActionResult<IEnumerable<Invoice>>>GetInvoices()
        {
            if(_context.Invoices == null)
            {
                return NotFound();
            }
            var invoice = await _context.Invoices.ToListAsync();
            return Ok(invoice);
        }
    }
}
