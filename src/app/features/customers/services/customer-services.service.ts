import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerServicesService {
  url: any = environment.apiUrls.baseApiUrl;
  constructor(private _http: HttpClient) { }

 getCountryList() {
    return this._http.get<any>(this.url + 'countries');
  }
  getRegionList () {
    return this._http.get<any>(this.url + 'countries');
  }
}
