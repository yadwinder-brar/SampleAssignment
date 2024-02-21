import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPinsComponent } from './components/add-pins/add-pins.component';
import { PinsListComponent } from './components/pins-list/pins-list.component';
import { PinsRoutingModule } from './pins-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import { NgxSelectModule } from 'ngx-select-ex';
import { FileUploadModule } from 'ng2-file-upload';
import { MatRadioModule } from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AddPinsComponent,
    PinsListComponent
  ],
  imports: [
    CommonModule,
    PinsRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    FileUploadModule,
    NgxSelectModule,
    MatSnackBarModule,
    MatRadioModule
  ],
})
export class PinsModule { }
