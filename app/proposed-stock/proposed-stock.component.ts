import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar-EG';

registerLocaleData(localeAr);

@Component({
  selector: 'app-proposed-stock',
  templateUrl: './proposed-stock.component.html',
  styleUrls: ['./proposed-stock.component.css']
})
export class ProposedStockComponent implements OnInit {

  myDate =  Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
