import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import { Pins } from '../../models';
import { LocalStorageService } from 'src/app/core/services/localstorage.service';
import { LocalStorageKeys } from 'src/app/core/config';
@Component({
  selector: 'app-add-pins',
  templateUrl: './add-pins.component.html',
  styleUrls: ['./add-pins.component.css']
})
export class AddPinsComponent implements OnInit {
 pinsForm!:FormGroup
  constructor(public dialogRef: MatDialogRef<AddPinsComponent>,
    private _formBuilder: FormBuilder,
  private _localStoRageServices:LocalStorageService
  
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.pinsForm = this._formBuilder.group({
    title:['',Validators.required],
    image:['',Validators.required],
    collaboratory:['',Validators.required],
    privacy:['',Validators.required],
  })
}

  addPin() {
    if (!this.pinsForm.valid) {
      this.pinsForm.markAllAsTouched();
    return
    }

    this.setPins(this.pinsForm.value);
  }
  
  setPins(data: Pins) {
  
    let pins = this._localStoRageServices.pins;

    pins.push(data);

    this._localStoRageServices.setLocalStoageItems(LocalStorageKeys.PINS,pins)
}



}
