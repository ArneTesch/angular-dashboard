import { Type } from '@angular/core';
import { CellRendererComponent } from '../components/table-cell/table-cell.component';

export interface TableColumn {
  property: string;
  type: 'string' | 'component';
  component?: Type<CellRendererComponent<any>>;
  label: string;
  sorting?: boolean;
}

export type TableColumnsConfig = Array<TableColumn>;

export interface RowActionConfig {
  type: string;
  label: string;
  icon: string;
  visible: (item: any) => boolean;
}

export interface TableActionConfig {
  type: string;
  label: string;
  icon: string;
}

export type RowActionConfigs = Array<RowActionConfig>;

export type TableActionConfigs = Array<TableActionConfig>;
