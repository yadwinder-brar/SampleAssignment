import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomersComponent } from './components/add-customers/add-customers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxSelectModule } from 'ngx-select-ex';



@NgModule({
  declarations: [
    AddCustomersComponent,
    
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    NgxSelectModule
  ]
})
export class CustomersModule { }
