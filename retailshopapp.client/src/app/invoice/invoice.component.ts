import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InvoiceService } from '../shared/invoice.service';
import { NgForm } from '@angular/forms';
import { Invoice } from '../shared/invoice.model';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  recentInvoice: Invoice = {
    invoiceId: 0,
    transactionDate: new Date().toISOString(),
    totalAmount: 0,
    discount: 0,
    balanceAmount: 0,
    products: []
  };;
  formData: Invoice = {
    invoiceId: 0,
    transactionDate: new Date().toISOString(),
    totalAmount: 0,
    discount: 0,
    balanceAmount: 0,
    products: []
  };
  submitted: boolean = false;

  constructor(private invoiceService: InvoiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {

  }


  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.formData.totalAmount > 0) {
        if (this.formData.invoiceId === 0) {
          this.submitted = true;
          this.insertRecord(form);
        }
        else
          this.updateRecord(form);
      }
      else {
        alert("Please enter valid data");
      }

    }

  }
  insertRecord(form: NgForm) {
    this.invoiceService.addInvoice(this.formData)
      .subscribe({
        next: (res) => {
          this.recentInvoice = res as Invoice;
          console.log('Submitted Invoice:', this.recentInvoice);
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
}
