import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from './invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private url = 'https://localhost:7148/api/Invoice';
  invoice: Invoice[] = [];
  formData: Invoice = new Invoice();
  constructor(private http: HttpClient) { }
  getInvoice() {
    return this.http.get(this.url +"/GetInvoices");
  }

  addInvoice(formData: Invoice) {
    console.log("Service",formData);
    return this.http.post(this.url + "/AddInvoice", JSON.stringify(formData), { headers: { 'Content-Type': 'application/json' } });

  }
  getInvoiceById(id: number) {
    return this.http.get<Invoice>(`${this.url}/${id}`);
  }
}
