import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  constructor() { }
  form2 = 'display: none';
  openForm2(){
    this.form2 = `display: flex`;
  }
  closeForm2(){
    this.form2 = 'display: none';
  }
  ngOnInit(): void {
  }

}
