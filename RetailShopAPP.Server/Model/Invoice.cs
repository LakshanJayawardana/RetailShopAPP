namespace RetailShopAPP.Server.Model
{
    public class Invoice
    {
        public int InvoiceId { get; set; } // Primary Key
        public DateTime TransactionDate { get; set; } = DateTime.UtcNow;
        public decimal TotalAmount { get; set; }
        public decimal Discount { get; set; }
        public decimal BalanceAmount { get; set; }

        public List<Product> Products { get; set; } = new();
    }
}
