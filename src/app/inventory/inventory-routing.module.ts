import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './containers/main-content/main-content.component';
import { InventoryComponent } from './containers/inventory/inventory.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    children: [
      {
        path: '',
        component: InventoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsRoutingModule {}
