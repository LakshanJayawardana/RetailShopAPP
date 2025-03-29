namespace RetailShopAPP.Server.Model
{
    public class Invoice
    {
        public int Id { get; set; }
        public DateTime TransactionDate { get; set; }
        public List<InvoiceItem> Items { get; set; }
        public decimal TotalAmount { get; set; }
        public decimal BalanceAmount { get; set; }
    }
}
