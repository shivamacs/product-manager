import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-stock',
  templateUrl: './product-stock.component.html',
  styleUrls: ['./product-stock.component.css']
})
export class ProductStockComponent implements OnInit {

  @Input() products: any;

  constructor() { }

  ngOnInit() {
  }

}
