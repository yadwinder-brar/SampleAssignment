import { Component, OnInit } from '@angular/core';
import { Pins } from '../../models/index';
import { LocalStorageService } from 'src/app/core/services/localstorage.service';
import { MatDialog } from '@angular/material/dialog';
import { AddPinsComponent } from '../add-pins/add-pins.component';

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
    maxWidth: '50px',
    minWidth: '390px',
    disableClose: true
  })
  .afterClosed().subscribe(res=>{ })
}

  
}
