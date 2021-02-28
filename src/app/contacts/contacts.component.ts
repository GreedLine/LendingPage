import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

    constructor() {
    }

    form1 = false;
    form2 = false;

    toggleCommercialModal(): void {
        this.form1 = !this.form1;
    }

    toggleAnalysisModal(): void {
        this.form2 = !this.form2;
    }

    ngOnInit(): void {
    }

}
