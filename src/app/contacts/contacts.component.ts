import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ModalState} from '../reducers/analysisModal/modal.reducer';
import {AnalysisToggleAction, BusinessToggleAction} from '../reducers/analysisModal/modal.actions';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

    constructor(private store$: Store<ModalState>) {
    }

    toggleBusinessModal(): void {
        this.store$.dispatch(new BusinessToggleAction());
    }

    toggleAnalysisModal(): void {
        this.store$.dispatch(new AnalysisToggleAction());
    }

    ngOnInit(): void {
    }

}
