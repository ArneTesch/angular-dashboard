import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../../entities/item.entity';

@Component({
  selector: 'app-inventory-table',
  template: `
    <table mat-table #table [dataSource]="items" class="mat-table">

      <!-- Position Column -->
      <ng-container matColumnDef="position">
        <th mat-header-cell *matHeaderCellDef>N°</th>
        <td mat-cell *matCellDef="let item">{{ item.id }}</td>
      </ng-container>

      <!-- Name Column -->
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef>Name</th>
        <td mat-cell *matCellDef="let item">{{ item.name }}</td>
      </ng-container>

      <!-- Name Column -->
      <ng-container matColumnDef="price">
        <th mat-header-cell *matHeaderCellDef>Price</th>
        <td mat-cell *matCellDef="let item">{{ item.price }}</td>
      </ng-container>

      <!-- actions Column -->
      <ng-container matColumnDef="actions">
        <th mat-header-cell *matHeaderCellDef></th>
        <td mat-cell *matCellDef="let item">
          <i class="material-icons pointer">edit</i>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;" (click)="rowSelected.emit(row)"></tr>
    </table>
  `,
  styleUrls: ['./inventory-table.component.scss'],
})
export class InventoryTableComponent implements OnInit {
  @Input() items: Array<Item>;

  @Output() rowSelected = new EventEmitter<Item>();

  displayedColumns = ['position', 'name', 'price', 'actions'];

  constructor() {}

  ngOnInit() {}
}
