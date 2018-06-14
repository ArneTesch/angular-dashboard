import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../../entities/item.entity';

@Injectable()
export class ItemService {
  URL = 'http://localhost:3000/items';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Item>> {
    return this.http.get<Array<Item>>(`${this.URL}`);
  }

  getById(id: number): Observable<Item> {
    return this.http.get(`${this.URL}/${id}`);
  }

  add(item: Item): Observable<Item> {
    return this.http.post(this.URL, item);
  }

  update(item: Item, id: number) {
    return this.http.put(`${this.URL}/${id}`, item);
  }
}
