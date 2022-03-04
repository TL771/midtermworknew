import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import {Flight} from '../../class/flight';
import {PageService} from '../../share/page.service'
@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  flightdata!:Flight[];
  flightform!: FormGroup;
  countrydata!:any;
  date:Date = new Date();
  constructor(private fb:FormBuilder, private pageService: PageService) {
    this.flightform = this.fb.group({
      fullName: ["",[Validators.required,Validators.minLength(5)]],
      from: ["",[Validators.required]],
      to: ["",[Validators.required]],
      type: ["",[Validators.required]],
      adults:[0,[Validators.min(1)]],
      departure: ["",[Validators.required]],
      children: [0],
      infants: [0],
      arrival: ["",[Validators.required]],
    })
  }

  ngOnInit(): void {
    this.flightdata = this.pageService.getMockflight();
    this.countrydata = this.pageService.getCountry();
  }

  OnSubmit(value: any): void {
    console.log(value);
    this.flightdata.push(value);
    alert("You Submit.");
    this.flightform.reset()
  }
}
