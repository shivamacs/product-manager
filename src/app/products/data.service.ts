import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private productsUrl = 'api/products';
  productsLength: number;
  products: Product[];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product, this.httpOptions);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(this.productsUrl, product, this.httpOptions);
  }

  deleteProduct(product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete<Product>(url, this.httpOptions);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProductById(id: number | string): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  getNumberOfProducts(): Observable<number> {
    return this.http.get<number>(this.productsUrl);
  }

}
