import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../Components/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8000'; // Адрес API

  constructor(private http: HttpClient) { }


  ////
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl);
  }


  getProductById(id: number): Observable<IProduct | undefined> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<IProduct>(url);
  }
  ////



  ////
  addProduct(product: IProduct): Observable<IProduct> {
    console.log(product)
    return this.http.post<IProduct>(this.apiUrl, product);
  }
  ////


  ////
  updateProduct(product: IProduct): Observable<IProduct> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put<IProduct>(url, product);
  }
  ////


  ////
  deleteProduct(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  ////

}
