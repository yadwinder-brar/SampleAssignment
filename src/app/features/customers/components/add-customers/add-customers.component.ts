import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/core/services/localstorage.service';
import { CustomerServicesService } from '../../services';
import { catchError } from 'rxjs/internal/operators/catchError';
import { EMPTY, take } from 'rxjs';
import { Country } from '../../models/customes.model';
import { LocalStorageKeys } from 'src/app/core/config';
import { Customers } from '../../models';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {
  addCustomerForm!: FormGroup;
  counrtyDropDownList: Country[] = [];
  regionList: string[] = ['Africa','Asia','Antarctic','Central America'];
  counrtyList: Country[] = [{ "country": "Algeria", "region": "Africa" },
    { "country": "Angola", "region": "Africa" },
    { "country": "Benin", "region": "Africa" },
    { "country": "Botswana", "region": "Africa" },
    { "country": "Burkina Faso", "region": "Africa" },
    { "country": "Burundi", "region": "Africa" },
    { "country": "Cabo Verde", "region": "Africa" },
    { "country": "Cameroon", "region": "Africa" },
    { "country": "Central African Republic (the)", "region": "Africa" },
    { "country": "Chad", "region": "Africa" },
    { "country": "Comoros (the)", "region": "Africa" },
    { "country": "Congo (the Democratic Republic of the)", "region": "Africa" },
    { "country": "Congo (the)", "region": "Africa" },
    { "country": "Côte d'Ivoire", "region": "Africa" },
    { "country": "Djibouti", "region": "Africa" },
    { "country": "Egypt", "region": "Africa" },
    { "country": "Equatorial Guinea", "region": "Africa" },
    { "country": "Eritrea", "region": "Africa" },
    { "country": "Eswatini", "region": "Africa" },
    { "country": "Ethiopia", "region": "Africa" },
    { "country": "Gabon", "region": "Africa" },
    { "country": "Gambia (the)", "region": "Africa" },
    { "country": "Ghana", "region": "Africa" },
    { "country": "Guinea", "region": "Africa" },
    { "country": "Guinea-Bissau", "region": "Africa" },
    { "country": "Kenya", "region": "Africa" },
    { "country": "Lesotho", "region": "Africa" },
    { "country": "Liberia", "region": "Africa" },
    { "country": "Libya", "region": "Africa" },
    { "country": "Madagascar", "region": "Africa" },
    { "country": "Malawi", "region": "Africa" },
    { "country": "Mali", "region": "Africa" },
    { "country": "Mauritania", "region": "Africa" },
    { "country": "Mauritius", "region": "Africa" },
    { "country": "Mayotte", "region": "Africa" },
    { "country": "Morocco", "region": "Africa" },
    { "country": "Mozambique", "region": "Africa" },
    { "country": "Namibia", "region": "Africa" },
    { "country": "Niger (the)", "region": "Africa" },
    { "country": "Nigeria", "region": "Africa" },
    { "country": "Réunion", "region": "Africa" },
    { "country": "Rwanda", "region": "Africa" },
    { "country": "Saint Helena, Ascension and Tristan da Cunha", "region": "Africa" },
    { "country": "Sao Tome and Principe", "region": "Africa" },
    { "country": "Senegal", "region": "Africa" },
    { "country": "Seychelles", "region": "Africa" },
    { "country": "Sierra Leone", "region": "Africa" },
    { "country": "Somalia", "region": "Africa" },
    { "country": "South Africa", "region": "Africa" },
    { "country": "South Sudan", "region": "Africa" },
    { "country": "Tanzania, the United Republic of", "region": "Africa" },
    { "country": "Togo", "region": "Africa" },
    { "country": "Tunisia", "region": "Africa" },
    { "country": "Uganda", "region": "Africa" },
    { "country": "Western Sahara*", "region": "Africa" },
    { "country": "Zambia", "region": "Africa" },
    { "country": "Zimbabwe", "region": "Africa" },
    { "country": "Antarctica", "region": "Antarctic" },
    { "country": "Bouvet Island", "region": "Antarctic" },
    { "country": "French Southern Territories (the)", "region": "Antarctic" },
    { "country": "Heard Island and McDonald Islands", "region": "Antarctic" },
    { "country": "South Georgia and the South Sandwich Islands", "region": "Antarctic" },
    { "country": "Afghanistan", "region": "Asia" },
    { "country": "Armenia", "region": "Asia" },
    { "country": "Azerbaijan", "region": "Asia" },
    { "country": "Bangladesh", "region": "Asia" },
    { "country": "Bhutan", "region": "Asia" },
    { "country": "British Indian Ocean Territory (the)", "region": "Asia" },
    { "country": "Brunei Darussalam", "region": "Asia" },
    { "country": "Cambodia", "region": "Asia" },
    { "country": "China", "region": "Asia" },
    { "country": "Georgia", "region": "Asia" },
    { "country": "Hong Kong", "region": "Asia" },
    { "country": "India", "region": "Asia" },
    { "country": "Indonesia", "region": "Asia" },
    { "country": "Japan", "region": "Asia" },
    { "country": "Kazakhstan", "region": "Asia" },
    { "country": "Korea (the Democratic People's Republic of)", "region": "Asia" },
    { "country": "Korea (the Republic of)", "region": "Asia" },
    { "country": "Kyrgyzstan", "region": "Asia" },
    { "country": "Lao People's Democratic Republic (the)", "region": "Asia" },
    { "country": "Macao", "region": "Asia" },
    { "country": "Malaysia", "region": "Asia" },
    { "country": "Maldives", "region": "Asia" },
    { "country": "Mongolia", "region": "Asia" },
    { "country": "Myanmar", "region": "Asia" },
    { "country": "Nepal", "region": "Asia" },
    { "country": "Pakistan", "region": "Asia" },
    { "country": "Philippines (the)", "region": "Asia" },
    { "country": "Singapore", "region": "Asia" },
    { "country": "Sri Lanka", "region": "Asia" },
    { "country": "Taiwan (Province of China)", "region": "Asia" },
    { "country": "Tajikistan", "region": "Asia" },
    { "country": "Thailand", "region": "Asia" },
    { "country": "Timor-Leste", "region": "Asia" },
    { "country": "Turkmenistan", "region": "Asia" },
    { "country": "Uzbekistan", "region": "Asia" },
    { "country": "Viet Nam", "region": "Asia" },
    { "country": "Belize", "region": "Central America" }]
  constructor(
    public dialogRef: MatDialogRef<AddCustomersComponent>,
    private _formBuilder: FormBuilder,
    private _localStoRageServices: LocalStorageService,
    private _customerServices: CustomerServicesService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  //  api gets cors error so i keep static data for coutry and regions 
  } 
  removeDuplicates(arr:any[]) { 
    return arr.filter((item: any, index: any) => arr.indexOf(item) === index);
  }

  createForm() {
    this.addCustomerForm = this._formBuilder.group({
    title:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    region:['',Validators.required],
    country:['',Validators.required],
  })
  }
  
  getRegionList() {
    this._customerServices.getRegionList().pipe(
      catchError((error) => {
        alert(error?.message);
        // we can use toaster insted of alert
        return EMPTY;
      }), take(1)).subscribe(res => {
        if (res?.status == 'ok') {
        this.regionList = res.data
      }else {
        alert(res?.status)
        // we can use status code for better approch and use intercepter for better error handling
    }
    })
  }
  getCountryList() {
    this._customerServices.getCountryList().pipe(
      catchError((error) => {
        alert(error?.message);
        // we can use toaster insted of alert
        return EMPTY;
      }), take(1)).subscribe(res => {
        if (res?.status == 'ok') {
        this.counrtyList = res.data
        } else {
          alert(res?.status)
          // we can use status code for better approch and use intercepter for better error handling
      }
    })
  }

  selectRegion(event: any) {
    this.addCustomerForm.get('country')?.setValue('');
    this.counrtyDropDownList = this.counrtyList.filter((e: any) => e.region == event[0].value);
  }
  addCustomers() {
    
    if (!this.addCustomerForm.valid) {
      this.addCustomerForm.markAllAsTouched();
    return
    }

    this.setCustomers(this.addCustomerForm.value);
  }
  
  setCustomers(data: Customers) {
  
    let customers = this._localStoRageServices.customers;

    customers.push(data);

    this._localStoRageServices.setLocalStoageItems(LocalStorageKeys.CUSTOMERS, customers);
    this.dialogRef.close();
    // add success message or toaster 
}


}
