import { Component } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
CartService
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
constructor(public cartService: CartService) {}
}
