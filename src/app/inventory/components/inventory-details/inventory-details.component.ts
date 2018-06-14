import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../../entities/item.entity';
import { Category } from '../../../entities/category.entity';

@Component({
  selector: 'app-inventory-details',
  template: `
    <div class="item-details">
      <div class="details-header">
        <h2>{{ item?.name}}</h2>
        <button class="save-item-button cta elevation pointer">
          <i class="material-icons">save</i>
        </button>
      </div>
      <app-text-input
        labelText="{{ 'PLACEHOLDER.PRODUCT_NAME' | translate}}"
        [control]="itemForm.get('name')"
      ></app-text-input>
      <app-autocomplete
        labelText="{{ 'PLACEHOLDER.CATEGORY' | translate }}"
        [control]="itemForm.get('category')"
        [sourceData]="categories"
        property='name'
      ></app-autocomplete>
    </div>
  `,
  styleUrls: ['./inventory-details.component.scss'],
})
export class InventoryDetailsComponent implements OnInit, OnChanges {
  @Input() item: Item;
  @Input() categories: Array<Category>;
  itemForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.itemForm = this.fb.group({
      name: [null, { validators: Validators.required }],
      category: [null, { validators: Validators.required }],
    });
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item']) {
      this.itemForm.patchValue({ ...this.item });
    }
  }
}
