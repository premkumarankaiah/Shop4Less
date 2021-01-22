import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryUrl = 'http://localhost:3000/'
  constructor(private httpClient:HttpClient) { }

  getAllCategories():Observable<Category>{
    return this.httpClient.get<Category>(this.categoryUrl+'categories');
  }
}
