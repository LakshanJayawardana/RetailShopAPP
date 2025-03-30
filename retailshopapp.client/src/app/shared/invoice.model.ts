export class Product {
  productId: number = 0;
  name: string ='';
  price: number = 0;
  quantity: number = 0;
}

export class Invoice {
  invoiceId: number = 0;
  transactionDate: string = '';  // Use string to handle date format
  totalAmount: number = 0;
  discount: number = 0;
  balanceAmount: number = 0;
  products: Product[] = [];  // List of products associated with the invoice
}
