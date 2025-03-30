import { Component, Input } from '@angular/core';
import { Invoice } from '../shared/invoice.model';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent {
  @Input() invoice: Invoice | null = null;
}
