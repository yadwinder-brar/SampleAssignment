import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinsListComponent } from './components/pins-list/pins-list.component';
const routes: Routes = [
  { path: '', redirectTo: 'pins-list', pathMatch: 'full' },
  { path: "pins-list", component: PinsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PinsRoutingModule { }