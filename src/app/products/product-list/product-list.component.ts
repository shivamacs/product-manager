import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../../product';
import { DataService } from '../data.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: any;
  selectedProduct: Product;

  @Output() selectedEvent = new EventEmitter<any>();

  constructor(private dataService: DataService) { }

  ngOnInit() { }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    this.sendProduct();
  }

  sendProduct() {
    this.selectedEvent.emit(this.selectedProduct);
  }
}
