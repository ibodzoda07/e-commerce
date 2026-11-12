import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product_model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly API = 'https://fakestoreapi.com/products';
  private readonly http = inject(HttpClient);

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API);
  }
}
