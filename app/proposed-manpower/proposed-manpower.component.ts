import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar-EG';


registerLocaleData(localeAr)

@Component({
  selector: 'app-proposed-manpower',
  templateUrl: './proposed-manpower.component.html',
  styleUrls: ['./proposed-manpower.component.css']
})
export class ProposedManpowerComponent implements OnInit {

  myDate =  Date.now();


  constructor() { }

  ngOnInit(): void {
  }

}
