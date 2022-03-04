import { Injectable } from '@angular/core';
import {flightdata} from './mockflight';
import {countrydata} from './mockcountry';
@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }

  getMockflight(){
    return flightdata;
  }
  getCountry(){
    return countrydata;
  }
}
