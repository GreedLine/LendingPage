import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {ModalState} from '../reducers/analysisModal/modal.reducer';
import {AnalysisToggleAction} from '../reducers/analysisModal/modal.actions';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-analysis-modal-window',
    templateUrl: './modal-window.component.html',
    styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
    isSuccess = false;
    isFailed = false;
    submitted = false;
    analysisForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        company: new FormControl('', [Validators.required]),
        sphere: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
    });


    constructor(private store$: Store<ModalState>, private http: HttpClient) {
    }

    toggleModal(): void {
        this.store$.dispatch(new AnalysisToggleAction());
    }

    async onSubmit(): Promise<void> {
        this.submitted = true;
        const url = '/api/message/analysis';
        if (this.analysisForm.controls.name.errors ||
            this.analysisForm.controls.company.errors ||
            this.analysisForm.controls.sphere.errors ||
            this.analysisForm.controls.city.errors ||
            this.analysisForm.controls.phone.errors ||
            this.analysisForm.controls.email.errors
        ) {
        } else {
            await this.http.post(url, this.analysisForm.value, {responseType: 'text'}).toPromise()
                .then((res: any) => {
                    this.isSuccess = true;
                    console.log(res);
                    setTimeout(() => {
                        this.store$.dispatch(new AnalysisToggleAction());
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
