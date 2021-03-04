import {Component, OnInit} from '@angular/core';
import {ModalState} from '../reducers/analysisModal/modal.reducer';
import {Store} from '@ngrx/store';
import {AnalysisToggleAction} from '../reducers/analysisModal/modal.actions';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit {

    constructor(private store$: Store<ModalState>) {
    }


    toggleModal(): void {
        this.store$.dispatch(new AnalysisToggleAction());
    }


    ngOnInit(): void {
    }

}
