import {Component, OnInit} from '@angular/core';
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

    name: any;
    company: any;
    work: any;
    city: any;
    phone: any;
    mail: any;

    constructor(private store$: Store<ModalState>, private http: HttpClient) {
    }

    toggleModal(): void {
        this.store$.dispatch(new AnalysisToggleAction());
    }

    onSubmit(): void {
        const url = 'https://httpbin.org/post';
        this.http.post(url, {
            name: this.name,
            phone: this.phone,
            mail: this.mail,
            work: this.work,
            city: this.city
        }).toPromise().then((data: any) => {
            console.log(data);
            this.store$.dispatch(new AnalysisToggleAction());
        });
    }


    ngOnInit(): void {
    }

}
