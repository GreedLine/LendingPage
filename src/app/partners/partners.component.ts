import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ModalState} from '../reducers/analysisModal/modal.reducer';
import {BusinessToggleAction} from '../reducers/analysisModal/modal.actions';

@Component({
    selector: 'app-partners',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

    constructor(private store$: Store<ModalState>) {
    }

    toggleModal(): void {
        this.store$.dispatch(new BusinessToggleAction());
    }

    ngOnInit(): void {
    }

}
