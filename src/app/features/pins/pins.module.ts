import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPinsComponent } from './components/add-pins/add-pins.component';
import { PinsListComponent } from './components/pins-list/pins-list.component';
import { PinsRoutingModule } from './pins-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import { FileUploaderModule } from '../../shared/file-uploader/file-uploader.module';
import { NgxSelectModule } from 'ngx-select-ex';
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
    FileUploaderModule,
    NgxSelectModule
  ],
})
export class PinsModule { }
