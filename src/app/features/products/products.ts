import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Card } from '../../shared/ui/card/card';
import { Button } from '../../shared/ui/button/button';
import { Product } from './models/product.model';
import { CartService } from '../../core/services/cart.service';
import { ProductService } from '../../core/services/product.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, Card, Button],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  products = signal<Product[]>([]);
  loading = signal(true);

  constructor(){
    this.loadProducts();
  }

  loadProducts(){
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  
  addToCart(product:Product){
    this.cartService.add(product);
  }

}
