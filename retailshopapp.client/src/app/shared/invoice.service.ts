import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InvoiceModel } from './invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private url = 'https://localhost:7148/api/Invoice';
  invoice: InvoiceModel[] = [];
  formData: InvoiceModel = new InvoiceModel();
  constructor(private http: HttpClient) { }
  getInvoice() {
    return this.http.get(this.url +"/GetInvoices");
  }

  addInvoice() {
    return this.http.post(this.url + "/AddInvoice", this.formData);
  }
}
