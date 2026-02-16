import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './shared/layout/header/header';
import { Container } from './shared/layout/container/container';
import { Products } from './features/products/products';
import { CartDrawer } from './shared/ui/cart-drawer/cart-drawer';
import { Toast } from './shared/ui/toast/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Container,
    Products,
    CartDrawer,
    Toast
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}
