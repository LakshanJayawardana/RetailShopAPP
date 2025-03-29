namespace RetailShopAPP.Server.Model
{
    public class Product
    {
        public int Id { get; set; } // Primary Key
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; } // Price per unit
        public string Description { get; set; } = string.Empty;
    }
}
