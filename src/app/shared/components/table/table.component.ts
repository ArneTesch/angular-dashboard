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
    <div class="table-main">
      <table class="table" *ngIf="(items && items.length > 0); else emptyWarning">
        <thead class="table-head">
        <tr class="table-header-row">
          <th class="header-cell pointer"
              *ngFor="let config of tableColumns"
              (click)="config.sorting ? sort(config.property): null">
                {{config.label}}
            <ng-container *ngIf="config.sorting">
              <i
              [style.opacity]="propToOrder === config.property ? '1' : '0'"
              [ngStyle]="{'transform':(order === 'asc') ? 'rotate(0) translateY(3px)' : 'rotate(180deg) translateY(-3px)'}"
              class="material-icons header-sort">arrow_downward</i>
            </ng-container>
          </th>
          <th *ngIf="tableActions || rowActions" class="table-actions">
            <div>
              <ng-container *ngFor="let action of tableActions">
                <i class="material-icons pointer elevation"
                   (click)="actionFire.emit({type: action.type})">
                  {{action.icon}}
                </i>
              </ng-container>
            </div>
          </th>
        </tr>
        </thead>
        <tbody>
        <ng-container *ngFor="let item of items">
          <tr
          (click)="selectRow.emit(item)"
          class="table-row">
            <td *ngFor="let config of tableColumns" class="table-cell">
              <app-table-cell
                [item]="item"
                [property]="config.property"
                [type]="config.type"
                [component]="config.component"></app-table-cell>
            </td>
            <td *ngIf="tableActions || rowActions" class="row-actions">
              <div>
                <ng-container *ngFor="let action of rowActions">
                  <i class="material-icons pointer"
                     (click)="actionFire.emit({type: action.type, item: item})"
                     *ngIf="action.visible(item)">
                     {{action.icon}}
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
                 (click)="actionFire.emit({type: action.type})">
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
  styleUrls: ['./table.component.scss'],
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
