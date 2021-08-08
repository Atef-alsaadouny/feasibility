import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar-EG';

registerLocaleData(localeAr)


@Component({
  selector: 'app-proposed-carrier',
  templateUrl: './proposed-carrier.component.html',
  styleUrls: ['./proposed-carrier.component.css']
})
export class ProposedCarrierComponent implements OnInit {


  myDate =  Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
