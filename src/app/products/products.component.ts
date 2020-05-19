import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { DataService } from './data.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  constructor(private dataService: DataService ) { }

  @Input() selectedProduct: any;
  @Input() products: Product[];

  recieveExistingProducts($event: Product[]): void {
    this.products = $event;
  }

  receiveProduct($event: any) {
    this.selectedProduct = $event;
  }

  getProducts(): void {
    this.dataService.getProducts()
      .subscribe(products => this.products = products);
  }

  ngOnInit() {
    this.getProducts();
  }

  add(name: string, price: number, rating: number): void {
    name = name.trim();
    this.dataService.addProduct({ name, price, rating } as unknown as Product)
      .subscribe((product: any) => {
        this.products.push(product);
      });
  }

  delete(product: Product): void {
    if (confirm('Delete ' + product.name + ' ?')) {
      this.products = this.products.filter(h => h !== product);
      this.dataService.deleteProduct(product).subscribe();
      this.selectedProduct = '';
    }
  }
}
