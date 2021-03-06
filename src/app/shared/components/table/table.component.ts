import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  RowActionConfigs,
  TableActionConfigs,
  TableColumnsConfig,
} from '../../types';
import { orderItems } from '../../utils';

@Component({
  selector: 'app-table',
  template: `
    <div class="col-m-3 table-main">
      <table class="table table-bordered table-hover" *ngIf="(items && items.length > 0); else emptyWarning">
        <thead>
        <tr>
          <th *ngFor="let config of tableColumns"
              (click)="config.sorting ? sort(config.property): null">
            {{config.label}}
            <ng-container *ngIf="config.sorting">
              <i *ngIf="config.property !== propToOrder"
                 class="fa fa-sort pointer pull-right"
                 aria-hidden="true"></i>
              <i *ngIf="config.property === propToOrder && order === 'asc'"
                 class="fa fa-sort-asc pointer pull-right"
                 aria-hidden="true"></i>
              <i *ngIf="config.property === propToOrder && order === 'desc'"
                 class="fa fa-sort-desc pointer pull-right"
                 aria-hidden="true"></i>
            </ng-container>
          </th>
          <th *ngIf="tableActions || rowActions">
            <div>
              <ng-container *ngFor="let action of tableActions">
                <i class="{{ action.icon }} pull-right pointer"
                   title="{{ action.label | translate }}"
                   (click)="actionFire.emit({type: action.type})">
                </i>
              </ng-container>
            </div>
          </th>
        </tr>
        </thead>
        <tbody>
        <ng-container *ngFor="let item of items">
          <tr (click)="selectRow.emit(item)">
            <td *ngFor="let config of tableColumns">
              <app-table-cell [item]="item"
                                     [property]="config.property"
                                     [type]="config.type"
                                     [component]="config.component"></app-table-cell>
            </td>
            <td *ngIf="tableActions || rowActions">
              <div>
                <ng-container *ngFor="let action of rowActions">
                  <i class="{{ action.icon }} pull-right pointer"
                     title="{{ action.label | translate }}"
                     (click)="actionFire.emit({type: action.type, item: item})"
                     *ngIf="action.visible(item)">
                  </i>
                </ng-container>
              </div>
            </td>
          </tr>
        </ng-container>
        </tbody>
      </table>
      <ng-template #emptyWarning>
        <ng-container *ngIf="!!items && items.length === 0; else loader">
          <div class="alert alert-warning" role="alert">
            {{emptyTableLabel | translate}}
            <ng-container *ngFor="let action of tableActions">
              <i class="{{ action.icon }} pull-right pointer"
                 title="{{ action.label | translate }}"
                 (click)="actionFire.emit({type: action.type})"
              >
              </i>
            </ng-container>
          </div>
        </ng-container>
        <ng-template #loader>
          Loading...
        </ng-template>
      </ng-template>
    </div>
  `,
  styles: [
    `
      table th {
        user-select: none;
      }

      .table-main {
        overflow: auto;
      }
    `,
  ],
})
export class TableComponent {
  @Input() items: Array<any>;
  @Input() tableColumns: TableColumnsConfig;
  @Input() rowActions: RowActionConfigs;
  @Input() tableActions: TableActionConfigs;
  @Input() emptyTableLabel: string;

  @Output() actionFire = new EventEmitter<string>();
  @Output() selectRow = new EventEmitter<any>();

  order = 'desc';
  propToOrder: string;

  sort(prop: string) {
    if (this.propToOrder !== prop) {
      this.order = 'desc';
    }
    this.propToOrder = prop;
    this.order === 'asc' ? (this.order = 'desc') : (this.order = 'asc');
    this.items = orderItems(this.items, prop, this.order);
  }
}
