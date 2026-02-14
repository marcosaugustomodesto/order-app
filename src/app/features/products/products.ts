import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Card } from '../../shared/ui/card/card';
import { Button } from '../../shared/ui/button/button';
import { Product } from './models/product.model';
import { CartService } from '../../core/services/cart.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, Card, Button],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  constructor(private cartService: CartService){}
  products: Product[] = [
    {
      id: 1,
      name: 'Notebook Pro',
      description: 'Notebook de alta performance',
      price: 7999,
      imageUrl: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      name: 'Smartphone X',
      description: 'Smartphone última geração',
      price: 4999,
      imageUrl: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      name: 'Fone Bluetooth',
      description: 'Cancelamento de ruído',
      price: 899,
      imageUrl: 'https://via.placeholder.com/300x200'
    }
  ];
  
  addToCart(product:Product){
    this.cartService.add(product);
  }

}
