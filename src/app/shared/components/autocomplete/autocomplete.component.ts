import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  template: `
    <div class="input-field">
      <label class='input-field__label' [class.focus]='focus'>{{ labelText }}</label>
      <input
        class='input-field__text-input'
        type="search"
        [formControl]="control"
        (keyup)="onChange($event)"
        (focus)="onFocus()"
        (focusout)="onFocusOut()"
        (click)="clearAutoComplete()">
      <div class="suggestions" *ngIf="filteredList.length > 0">
        <ul>
          <li *ngFor='let item of filteredList' (click)='itemSelected(item)'>
            {{ item[property] }}
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit, OnChanges {
  @Input() sourceData;
  @Input() property;
  @Input() control: FormControl;
  @Input() labelText;

  filteredList = [];
  elementRef;
  focus = false;

  constructor(private el: ElementRef) {
    this.elementRef = el;
  }

  ngOnInit() {
    if (!this.control.value) {
      this.control.setValue('');
    } else {
      this.focus = true;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['control']) {
      this.focus = true;
    }
  }

  onChange() {
    if (this.control.value !== '') {
      this.filteredList = this.sourceData.filter(
        arrCategories =>
          arrCategories[`${this.property}`]
            .toLowerCase()
            .indexOf(this.control.value.toLowerCase()) > -1,
      );
    } else {
      this.clearAutoComplete();
    }
  }

  itemSelected(item) {
    this.control.setValue(item[this.property]);
    this.clearAutoComplete();
  }

  onFocus() {
    this.focus = true;
  }

  onFocusOut() {
    if (this.control.value === '') {
      this.focus = false;
    }
  }

  checkInput(srchString) {
    if (
      this.control.value === '' &&
      !this.control.pristine &&
      this.control.dirty
    ) {
      this.focus = true;
    }
  }

  clearAutoComplete() {
    this.filteredList = [];
  }
}
