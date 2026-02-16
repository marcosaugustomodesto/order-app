import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Product } from '../../../features/products/models/product.model';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
 
  @Input() product!: Product;
  @Output() add = new EventEmitter<Product>();

}
