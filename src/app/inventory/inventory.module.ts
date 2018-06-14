import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsRoutingModule } from './inventory-routing.module';
import { MainContentComponent } from './containers/main-content/main-content.component';
import { InventoryComponent } from './containers/inventory/inventory.component';
import { MaterialUIModule } from '../material-ui/material-ui.module';
import { ItemService } from './services/items.service';
import { ItemSandbox } from './sandboxes/items.sandbox';
import { CategoryService } from './services/categories.service';
import { SharedModule } from '../shared/shared.module';
import { InventoryDetailsComponent } from './components/inventory-details/inventory-details.component';
import { InventoryTableComponent } from './components/inventory-table/inventory-table.component';

const angularModules = [CommonModule];

const modules = [ItemsRoutingModule, SharedModule];

const materialModules = [MaterialUIModule];

const containers = [MainContentComponent, InventoryComponent];

const components = [InventoryDetailsComponent, InventoryTableComponent];

const providers = [ItemService, ItemSandbox, CategoryService];

@NgModule({
  imports: [...modules, ...angularModules, ...materialModules],
  declarations: [...containers, ...components],
  providers: [...providers],
})
export class InventoryModule {}
