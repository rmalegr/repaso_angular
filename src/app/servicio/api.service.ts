import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Producto } from '../models/productos.mode';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL = 'https://fakestoreapi.com/products'

  constructor(private _httpClient: HttpClient) { }

  getAllProducts(): Observable<Producto[]> {
    return this._httpClient.get<Producto[]>(`${this.baseURL}`);//devuelve un observable de tipo productos
  }
  getProduct(id: number): Observable<Producto> {//devuele un observable de un productos
    return this._httpClient.get<Producto>(`${this.baseURL}/${id}`);

  }
  public getAllCategories(): Observable<Category[]> {//devuel un observable de categorias
    return this._httpClient.get<Category[]>(`${this.baseURL}/categories`);

  }

  public newProducts(producto: Producto): Observable<Producto> {
    return this._httpClient.post<Producto>(`${this.baseURL}`, producto);
  }


  public updateProducts(id:number, producto: Producto): Observable<Producto> {//devuelve el producto 
    return this._httpClient.put<Producto>(`${this.baseURL}/${id}`, producto);
  }

  public deleteProducts(id:number): Observable<Producto> {//devuelve el producto
    return this._httpClient.delete<Producto>(`${this.baseURL}/${id}`);
  }




}
