import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InvoiceService } from '../shared/invoice.service';
import { NgForm } from '@angular/forms';
import { Invoice, Product } from '../shared/invoice.model';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  recentInvoice: Invoice = new Invoice();
  formData: Invoice = new Invoice();
  submitted: boolean = false;
  newProduct: Product = new Product();

  constructor(private invoiceService: InvoiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {

  }


  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.formData.isValid()) {
        this.formData.balanceAmount = this.formData.calculateBalance();
        if (this.formData.invoiceId === 0) {
          this.submitted = true;
          this.insertRecord(form);
        }
        else
          this.updateRecord(form);
      }
      else {
        alert("Invalid data. The balance (totalAmount - discount) must be greater than zero.");
      }

    }

  }
  insertRecord(form: NgForm) {
    this.invoiceService.addInvoice(this.formData)
      .subscribe({
        next: (res) => {
          this.recentInvoice = res as Invoice;
          this.resetForm(form);
        },
        error: err => {
          console.error('Error occurred:', err);
          if (err.error) {
            console.error("Error details:", err.error);
          }
        }
      });

  }
  updateRecord(form: NgForm) {
  }
  getInvoiceDetails() {
    this.invoiceService.getInvoice().subscribe((data: any) => {
      const sortedInvoice = data.sort((a: Invoice, b: Invoice) =>
        new Date(b.transactionDate).getTime() - new Date(a.transactionDate).getTime());
      const mostRecentInvoice = sortedInvoice[0];
      this.formData = mostRecentInvoice;
      console.log(this.formData);
    });
  }
  resetForm(form?:NgForm) {
    if (form) {
      form.resetForm();
    }
  }
  addProduct() {
    this.formData.products.push({ ...this.newProduct });
    this.calculateTotalAmount();
    this.newProduct = new Product();
  }
  removeProduct(index: number) {
    this.formData.products.splice(index, 1);
    this.calculateTotalAmount();
  }
  calculateTotalAmount() {
    this.formData.totalAmount = this.formData.products.reduce((total, product) => {
      return total + (product.price * product.quantity);
    }, 0);
  }
  onProductChange() {
    this.calculateTotalAmount();
  }
}
