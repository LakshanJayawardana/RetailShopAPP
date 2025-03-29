namespace RetailShopAPP.Server.Model
{
    public class InvoiceItem
    {
        public int InvoiceItemId { get; set; } // Primary Key
        public int InvoiceId { get; set; } // Foreign Key
        public int ProductId { get; set; } // Foreign Key
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; } // Product price at the time of sale
        public decimal SubTotal { get; set; } // Quantity * UnitPrice

        public Invoice Invoice { get; set; }
        public Product Product { get; set; }
    }
}
