import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-modal-window',
    templateUrl: './modal-window.component.html',
    styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

    submitted = false;
    analysisForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        company: new FormControl('', [Validators.required]),
        work: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        telephone: new FormControl('', [Validators.required,]),
        mail: new FormControl('', [Validators.required]),
    });
    toggle = false;

    constructor() {
    }

    toggleModal(): void {
        this.toggle = !this.toggle;
    }

    onSubmit(): void {
        this.submitted = true;
        console.log('Success');
        console.log(this.analysisForm);
    }

    ngOnInit(): void {
    }

}
