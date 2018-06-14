import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../entities/category.entity';

@Injectable()
export class CategoryService {
  URL = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(this.URL);
  }
}
