import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/pins/pins.module').then((m) => m.PinsModule)
  },
 {
    path: 'customers',
    loadChildren: () =>
      import('./features/customers/customers.module').then((m) => m.CustomersModule)},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
