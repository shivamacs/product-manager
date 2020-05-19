import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  @Input() selectedProduct: any;
  @Output() selectedEvent = new EventEmitter<any>();
  @Output() existingEvent = new EventEmitter<any>();
  products: Product[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProducts().subscribe(products => this.products = products);
  }

  recieveProduct($event: any): void {
    this.selectedProduct = $event;
  }

  save(): void {
    this.dataService.updateProduct(this.selectedProduct).subscribe(() => this.hide());
  }

  hide(): void {
    this.selectedProduct = '';
    this.selectedEvent.emit(this.selectedProduct);
  }

  cancel(): void {
    this.hide();
    this.existingEvent.emit(this.products);
  }

}
