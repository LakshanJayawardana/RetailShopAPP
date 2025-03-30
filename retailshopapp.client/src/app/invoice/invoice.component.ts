import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InvoiceService } from '../shared/invoice.service';
import { NgForm } from '@angular/forms';
import { InvoiceModel } from '../shared/invoice.model';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  constructor(private invoiceService: InvoiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.invoiceService.getInvoice().subscribe((data: any) => {
      this.invoiceService.invoice = data;
      console.log(this.invoiceService.invoice);
      console.log(data);

    });
  }
  

  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.invoiceService.formData.id == 0)
        this.insertRecord(form);
      else
        this.updateRecord(form);
    }
  }
  insertRecord(form: NgForm) {
    this.invoiceService.addInvoice()
      .subscribe({
      next: res => {
        this.invoiceService.invoice = res as InvoiceModel[];

      },
      error: err => {
        console.log(err);
      }
    })
  }
  updateRecord(form: NgForm) { }
}
