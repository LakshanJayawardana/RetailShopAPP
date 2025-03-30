export class Product {
  productId: number = 0;
  name: string ='';
  price: number = 0;
  quantity: number = 0;
}

export class Invoice {
  invoiceId: number;
  transactionDate: string;  // Use string to handle date format
  totalAmount: number;
  discount: number;
  balanceAmount: number;
  products: Product[];  // List of products associated with the invoice
  constructor(
    invoiceId: number = 0,
    transactionDate: string = new Date().toISOString(),
    totalAmount: number = 0,
    discount: number = 0,
    balanceAmount: number = 0,
    products: Product[] = []
  ) {
    this.invoiceId = invoiceId;
    this.transactionDate = transactionDate;
    this.totalAmount = totalAmount;
    this.discount = discount;
    this.balanceAmount = balanceAmount;
    this.products = products;
  }
  calculateBalance(): number {
    return this.totalAmount - this.discount;
  }
  isValid(): boolean {
    return this.calculateBalance() > 0;
  }
}

