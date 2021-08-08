import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar-EG';

registerLocaleData(localeAr);


@Component({
  selector: 'app-proposed-project-equipment',
  templateUrl: './proposed-project-equipment.component.html',
  styleUrls: ['./proposed-project-equipment.component.css']
})
export class ProposedProjectEquipmentComponent implements OnInit{

  myDate =  Date.now();


  constructor() { }

  ngOnInit(): void {
  }

}