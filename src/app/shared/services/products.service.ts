import { Product } from './../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductPayload } from '../interfaces/payload-product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'http://localhost:3000/products';
  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  get(id: string) {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`);
  }

  post(payload: ProductPayload) {
    return this.httpClient.post(this.apiUrl, payload);
  }

  put(id: string, payload: ProductPayload) {
    return this.httpClient.put(`${this.apiUrl}/${id}`, payload);
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
