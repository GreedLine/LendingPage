import {Component, OnInit} from '@angular/core';
import {BusinessToggleAction} from '../reducers/analysisModal/modal.actions';
import {Store} from '@ngrx/store';
import {ModalState} from '../reducers/analysisModal/modal.reducer';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-business-modal-window',
    templateUrl: './business-modal-window.component.html',
    styleUrls: ['./business-modal-window.component.scss']
})
export class BusinessModalWindowComponent implements OnInit {
    isSuccess = false;
    isFailed = false;
    submitted = false;
    businessForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
    });

    constructor(private store$: Store<ModalState>, private http: HttpClient) {
    }

    toggleModal(): void {
        this.store$.dispatch(new BusinessToggleAction());
    }

    async onSubmit(): Promise<void> {
        this.submitted = true;
        const url = 'http://localhost:5050/api/message/commercial';
        if (this.businessForm.controls.name.errors ||
            this.businessForm.controls.phone.errors ||
            this.businessForm.controls.email.errors
        ) {
        } else {
            await this.http.post(url, this.businessForm.value, {responseType: 'text'}).toPromise()
                .then((res: any) => {
                    this.isSuccess = true;
                    console.log(res);
                    setTimeout(() => {
                        this.store$.dispatch(new BusinessToggleAction());
                        this.isSuccess = false;
                    }, 2500);
                }).catch((err: any) => {
                    console.log('This is Error:');
                    this.isFailed = true;
                    console.log(err);
                });
        }
    }

    ngOnInit(): void {
    }

}
