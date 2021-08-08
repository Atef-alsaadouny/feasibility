import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar-EG';

registerLocaleData(localeAr)


@Component({
  selector: 'app-proposed-general-facility',
  templateUrl: './proposed-general-facility.component.html',
  styleUrls: ['./proposed-general-facility.component.css']
})
export class ProposedGeneralFacilityComponent implements OnInit {

  myDate =  Date.now();
  
  constructor() { }

  ngOnInit(): void {
  }

}
