import {Injectable} from '@angular/core';
import {ItemService} from '../services/items.service';
import {Item} from '../../entities/item.entity';
import {CategoryService} from '../services/categories.service';
import {Observable} from 'rxjs';
import {Category} from '../../entities/category.entity';


@Injectable()
export class ItemSandbox {
  constructor(
    private itemService: ItemService,
    private categoryService: CategoryService) {
  }

  getAllItems() {
    return this.itemService.getAll();
  }

  getItemById(id: number) {
    return this.itemService.getById(id);
  }

  getAllCategories(): Observable<Array<Category>>  {
    return this.categoryService.getAll();
  }

  addItem(item: Item) {
    return this.itemService.add(item);
  }

  updateItem(item: Item, id: number) {
    return this.itemService.update(item, id);
  }
}
