import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productUrl='http://localhost:3000/'
  constructor(private httpClient:HttpClient) { }

  createProduct(productDetail){
    return this.httpClient.post(this.productUrl+'products', productDetail) //returns observable
  }

  viewProduct(productId){
    return this.httpClient.get(this.productUrl+'product/'+productId) //returns observable
  }

  updateProduct(productId, productDetail){
    return this.httpClient.put(this.productUrl+'product/'+productId, productDetail) //returns observable
  }

  deleteProduct(productId){
    return this.httpClient.delete(this.productUrl+'product/'+productId) //returns observable
  }

  viewProductByCategory(categoryId){
    return this.httpClient.get(this.productUrl+'product/category='+categoryId) //returns observable
  }

  viewProductByDate(date){
    return this.httpClient.get(this.productUrl+'product/date='+date) //returns observable
  }

}
