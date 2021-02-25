import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }
  form2 = 'display: none';
  form1 = 'display: none';
  openForm2(){
    this.form2 = `display: flex`;
  }
  closeForm2(){
    this.form2 = 'display: none';
  }
  openForm1(){
    this.form1 = `display: flex`;
  }
  closeForm1(){
    this.form1 = 'display: none';
  }
  ngOnInit(): void {
  }

}
