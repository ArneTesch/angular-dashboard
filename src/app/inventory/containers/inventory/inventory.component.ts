import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Category } from '../../../entities/category.entity';
import { Item } from '../../../entities/item.entity';
import { joinArrays } from '../../../shared/utils/utility';
import { ItemSandbox } from '../../sandboxes/items.sandbox';

@Component({
  selector: 'app-items',
  template: `
    <div class="header">
      <h1>{{ 'TITLE.HEADER_INVENTORY' | translate }}</h1>
      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eaque eos est minima nam quo quod repudiandae soluta voluptas
        voluptatibus</h3>
    </div>
    <div class="container">
      <app-inventory-table
        [items]="itemsWithCategories$ | async"
        (selectRow)="showDetails($event)"
      ></app-inventory-table>
      <app-inventory-details
        [item]="selectedItem"
        [categories]="categories$ | async"
      ></app-inventory-details>
    </div>
  `,
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  items$: Observable<Array<Item>>;
  categories$: Observable<Array<Category>>;
  itemsWithCategories$: Observable<Array<Item>>;
  selectedItem: Item;

  constructor(private sandbox: ItemSandbox) {}

  ngOnInit() {
    this.items$ = this.sandbox.getAllItems();

    this.categories$ = this.sandbox.getAllCategories();

    this.itemsWithCategories$ = combineLatest(
      this.items$,
      this.categories$,
    ).pipe(map(([items, categories]) => joinArrays(items, categories)));

    if (!this.selectedItem) {
      this.itemsWithCategories$
        .pipe(take(1))
        .subscribe(items => (this.selectedItem = items[0]));
    }
  }

  showDetails(item: Item) {
    this.selectedItem = item;
  }
}
