import { Component, OnInit } from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public translateService: TranslocoService) { }

  rus = '_active-language';
  eng = '_inactive-language';

  public changeLanguageToRussian(): void {
    this.translateService.setActiveLang('ru');
    this.rus = '_active-language';
    this.eng = '_inactive-language';
  }

  public changeLanguageToEnglish(): void {
    this.translateService.setActiveLang('en');
    this.rus = '_inactive-language';
    this.eng = '_active-language';

  }

  ngOnInit(): void {
  }

}
