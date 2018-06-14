import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'inventory',
    loadChildren: './inventory/inventory.module#InventoryModule',
  },
  // {
  //   path: 'auth',
  //   loadChildren: 'app/authentication/authentication.module#AuthenticationModule'
  // },
  {
    path: '**',
    redirectTo: '/inventory',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
