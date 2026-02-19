import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Card } from '../../shared/ui/card/card';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';
import { ToastService } from '../../core/services/toast.service';
import { CartStore } from '../cart/cart.store';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, Card],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  private cartStore = inject(CartStore);
  private productService = inject(ProductService);
  private toast = inject(ToastService)

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
    this.cartStore.add(product);
    this.toast.show(`${product.name} adicionado ao carrinho`)
  }

}
