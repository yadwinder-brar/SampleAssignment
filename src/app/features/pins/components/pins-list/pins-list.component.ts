import { Component, OnInit } from '@angular/core';
import { Pins } from '../../models/index';
import { LocalStorageService } from 'src/app/core/services/localstorage.service';
import { MatDialog } from '@angular/material/dialog';
import { AddPinsComponent } from '../add-pins/add-pins.component';
import { AddCustomersComponent } from 'src/app/features/customers/components/add-customers/add-customers.component';

@Component({
  selector: 'app-pins-list',
  templateUrl: './pins-list.component.html',
  styleUrls: ['./pins-list.component.css']
})
export class PinsListComponent implements OnInit {
  pinsList: Pins[] = [];
  constructor(private localStorageService: LocalStorageService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.pinsList = this.localStorageService.pins
  }

  addPins() {
  this.dialog.open(AddPinsComponent,{
    minWidth: '500px',
    disableClose: true
  })
    .afterClosed().subscribe(res => {
      if (res) {
        this.pinsList = this.localStorageService.pins
    }
   })
}
  addCustomers() {
  this.dialog.open(AddCustomersComponent,{
    maxWidth: '550px',
    minWidth: '400px',
    disableClose: true
  })
  .afterClosed().subscribe(res=>{ })
}

  
}
