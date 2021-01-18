import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Product} from './product'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productUrl='http://localhost:3000/'
  constructor(private httpClient:HttpClient) { }

  createProduct(productDetail):Observable<Product>{
    return this.httpClient.post<Product>(this.productUrl+'products', productDetail) //returns observable
  }

  viewProduct(productId):Observable<Product>{
    return this.httpClient.get<Product>(this.productUrl+'product/'+productId) //returns observable
  }

  updateProduct(productId, productDetail):Observable<Product>{
    return this.httpClient.put<Product>(this.productUrl+'product/'+productId, productDetail) //returns observable
  }

  deleteProduct(productId):Observable<Product>{
    return this.httpClient.delete<Product>(this.productUrl+'product/'+productId) //returns observable
  }

  viewProductByCategory(categoryId):Observable<Product>{
    return this.httpClient.get<Product>(this.productUrl+'product/category='+categoryId) //returns observable
  }

  viewProductByDate(date):Observable<Product>{
    return this.httpClient.get<Product>(this.productUrl+'product/date='+date) //returns observable
  }

}
