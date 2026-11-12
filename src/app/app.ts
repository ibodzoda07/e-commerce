import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product-service';
import { IProduct } from './models/product_model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  protected readonly products = signal<IProduct[]>([]);

  constructor(private readonly productService: ProductService) {
    this.productService.getAllProducts().subscribe((res) => {
      this.products.set(res);
    });
  }
}
