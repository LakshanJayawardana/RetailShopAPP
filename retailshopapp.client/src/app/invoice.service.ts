import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InvoiceModel } from './invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private url = 'https://localhost:7148/api/Invoice';
  invoice: InvoiceModel[] = [];
  constructor(private http: HttpClient) { }
  getInvoice() {
    return this.http.get(this.url +"/GetInvoices");
  }
  addInvoice(invoice: InvoiceModel) {
    return this.http.post(this.url + "/AddInvoice", invoice);
  }
}
