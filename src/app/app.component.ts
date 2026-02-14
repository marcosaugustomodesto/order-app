import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/layout/header/header';
import { Container } from './shared/layout/container/container';
import { Button } from './shared/ui/button/button';
import { Card } from './shared/ui/card/card';
import { Products } from './features/products/products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Header, Container, Products],
  templateUrl: './app.component.html'
})
export class AppComponent {}
