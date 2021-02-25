import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  isModalDialogVisible = false;
  form1 = 'display: none';
  openForm1(){
    this.form1 = `display: flex`;
  }
  closeForm1(){
    this.form1 = 'display: none';
  }

  public openModal() {
    this.isModalDialogVisible = true;
  }
  public closeModal() {
    this.isModalDialogVisible = false;
  }
  ngOnInit(): void {
  }

}
