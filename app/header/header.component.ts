import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar-EG';

registerLocaleData(localeAr)


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myDate = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
