import {Component, OnInit} from '@angular/core';
import {BusinessToggleAction} from '../reducers/analysisModal/modal.actions';
import {Store} from '@ngrx/store';
import {ModalState} from '../reducers/analysisModal/modal.reducer';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-business-modal-window',
    templateUrl: './business-modal-window.component.html',
    styleUrls: ['./business-modal-window.component.scss']
})
export class BusinessModalWindowComponent implements OnInit {
    name: any;
    phone: any;
    mail: any;

    constructor(private store$: Store<ModalState>, private http: HttpClient) {
    }

    toggleModal(): void {
        this.store$.dispatch(new BusinessToggleAction());
    }

    onSubmit(): void{
        const url = 'https://httpbin.org/post';
        this.http.post(url, {
            name: this.name,
            phone: this.phone,
            mail: this.mail
        }).toPromise().then((data: any) => {
            console.log(data);
            this.store$.dispatch(new BusinessToggleAction());
        });
    }

    ngOnInit(): void {
    }

}
