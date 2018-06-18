import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Item } from '../../../entities/item.entity';
import { TableActionConfigs } from '../../../shared/types/table-config.type';
import {
  RowActionConfigs,
  TableColumnsConfig,
} from '../../../shared/types/table-config.type';

@Component({
  selector: 'app-inventory-table',
  template: `
  <app-table
  [tableColumns]="tableColumns"
  [items]="items"
  [rowActions]="rowActions"
  [tableActions]="tableActions"
  (selectRow)="showDetails($event)"
  emptyTableLabel="LABEL.EMPTY_TABLE"></app-table>
  `,
  styleUrls: ['./inventory-table.component.scss'],
})
export class InventoryTableComponent implements OnInit {
  @Input() items: Array<Item>;

  @Output() selectRow = new EventEmitter<Item>();

  tableColumns: TableColumnsConfig = <TableColumnsConfig>[
    {
      property: 'name',
      type: 'string',
      label: 'Name',
      sorting: true,
    },
    {
      property: 'description',
      type: 'string',
      label: 'Description',
      sorting: false,
    },
    {
      property: 'price',
      type: 'string',
      label: 'Price',
      sorting: true,
    },
  ];

  rowActions: RowActionConfigs = [
    {
      type: 'more',
      label: 'TITLE.SEE_MORE',
      icon: 'chevron_right',
      visible: _ => true,
    },
  ];

  tableActions: TableActionConfigs = [];

  constructor() {}

  ngOnInit() {}

  showDetails(item: Item) {
    this.selectRow.emit(item);
  }
}
