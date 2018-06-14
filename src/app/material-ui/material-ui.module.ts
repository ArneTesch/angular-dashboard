import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule, MatFormFieldModule, MatNativeDateModule, MatTableModule} from '@angular/material';

const cdkModules = [
  MatExpansionModule,
  MatCheckboxModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule
];

@NgModule({
  imports: [CommonModule, ...cdkModules],
  declarations: [],
  exports: [...cdkModules]
})
export class MaterialUIModule {
}
