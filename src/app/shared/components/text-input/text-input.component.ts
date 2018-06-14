import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-text-input',
  template: `
    <div class="input-field">
      <label class='input-field__label' [class.focus]='focus'>{{ labelText }}</label>
      <input type="text"
             class='input-field__text-input'
             [formControl]="control"
             (focus)='onFocus()'
             (focusout)='onFocusOut()'
             (ngModelChange)='checkInput()'>
    </div>
  `,
  styleUrls: ['./text-input.component.scss']
})

export class TextInputComponent implements OnInit, OnChanges {

  @Input() placeholder: string;
  @Input() labelText: string;
  @Input() control: FormControl;

  focus = false;
  textValue;


  ngOnInit() {

    if (!this.control.value) {
      this.textValue = '';
    } else {
      this.textValue = this.control.value;
      this.focus = true;
    }
  }

  onFocus() {
    this.focus = true;
  }

  onFocusOut() {
    if (this.control.value === '') {
      this.focus = false;
    }
  }

  checkInput() {
    if (this.textValue === '' && !this.control.pristine && this.control.dirty) {
      this.focus = true;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['control']) {
      this.focus = true;
    }
  }
}
