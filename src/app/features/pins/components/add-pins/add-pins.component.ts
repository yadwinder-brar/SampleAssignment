import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import { Pins } from '../../models';
import { LocalStorageService } from 'src/app/core/services/localstorage.service';
import { LocalStorageKeys } from 'src/app/core/config';
import { Customers } from 'src/app/features/customers/models';
import { FileUploader } from 'ng2-file-upload';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-pins',
  templateUrl: './add-pins.component.html',
  styleUrls: ['./add-pins.component.css'],
})
export class AddPinsComponent implements OnInit {
  pinsForm!: FormGroup
  uploadedImg: string = '';
  customers: Customers[] = [];
  URL = '';
  // no url for  upload api 
  constructor(public dialogRef: MatDialogRef<AddPinsComponent>,
    private _formBuilder: FormBuilder,
    private _localStoRageServices: LocalStorageService,
    private _snackBar: MatSnackBar
  
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.customers = this._localStoRageServices.customers;
    this.customers.length>0 ?'': this._snackBar.open('please add customers first','close');
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

    this._localStoRageServices.setLocalStoageItems(LocalStorageKeys.PINS, pins);
    this._snackBar.open('Pin added succesfully', 'close')
    this.dialogRef.close(true);
}


uploader:FileUploader = new FileUploader({
  url: this.URL, 
  disableMultipart:true
  });
  
  
  public onFileSelected(event: any) {
    let fileName = event[0]?.name
    this.pinsForm.get('image')?.setValue(fileName);
  }
  
  

}
