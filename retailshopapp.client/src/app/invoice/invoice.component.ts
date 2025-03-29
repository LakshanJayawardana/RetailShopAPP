import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InvoiceService } from '../invoice.service';

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

  onSubmit() {
    
  }
}
