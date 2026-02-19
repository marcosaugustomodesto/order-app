import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {

  private http = inject(HttpClient);

  getProducts() {
    return this.http.get<Product[]>('/data/products.json');
  }
}
