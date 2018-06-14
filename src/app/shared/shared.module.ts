import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components/text-input/text-input.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { TableCellComponent } from './components/table-cell/table-cell.component';
import { TableComponent } from './components/table/table.component';

const components = [
  TextInputComponent,
  AutocompleteComponent,
  ButtonComponent,
  TableCellComponent,
  TableComponent,
];

const modules = [
  CommonModule,
  TranslateModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: [...modules],
  declarations: [...components],
  exports: [...components, ...modules],
})
export class SharedModule {}
