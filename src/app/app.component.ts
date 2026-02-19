import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './shared/layout/header/header';
import { Container } from './shared/layout/container/container';
import { CartDrawer } from './features/cart/components/cart-drawer/cart-drawer';
import { Toast } from './shared/ui/toast/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Container,
    CartDrawer,
    Toast
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}
