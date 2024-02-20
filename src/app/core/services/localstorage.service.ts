import { Injectable } from '@angular/core';
import { LocalStorageKeys } from '../config';
import { Pins } from 'src/app/features/pins/models';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


  setLocalStoageItems(type : string, data:Pins) {
  localStorage.setItem(type, JSON.stringify(data))
}


  get pins() {
    if (localStorage?.getItem(LocalStorageKeys.PINS)) {
      return JSON.parse(localStorage?.getItem(LocalStorageKeys.PINS) || '');
    } else {
      return [];
    }
  }


  get customers() {
    if (localStorage?.getItem(LocalStorageKeys.CUSTOMERS)) {
      return JSON.parse(localStorage?.getItem(LocalStorageKeys.CUSTOMERS) || '');
    } else {
      return [];
    }
  }



}
