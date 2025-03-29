namespace RetailShopAPP.Server.Model
{
    public class Customer
    {
        public int CustomerId { get; set; } // Primary Key
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string ContactNumber { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;

        public List<Invoice> Invoices { get; set; } = new();
    }
}
