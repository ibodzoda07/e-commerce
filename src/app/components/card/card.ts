import { Component, signal } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { IProduct } from '../../models/product_model';
import { CurrencyPipe, NgClass } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe, TruncatePipe],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  readonly products = signal<IProduct[]>([]);

  constructor() {
    this.loadProducts();
    
  }

  loadProducts() {
    const productService = new ProductService();
    productService.getAllProducts().subscribe({
      next: (res) => {
        this.products.set(res);
        console.log('Товары успешно загружены:', res);
      },
      error: (err) => {
        console.error('Ошибка при загрузке товаров:', err);
      }
    });
  }
}
