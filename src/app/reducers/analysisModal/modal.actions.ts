import {Action} from '@ngrx/store';

export enum modalActions {
    analysisToggle = '[ANALYSIS] Toggle',
    businessToggle = '[BUSINESS] Toggle'
}


export class AnalysisToggleAction implements Action {
    readonly type = modalActions.analysisToggle;
}

export class BusinessToggleAction implements Action {
    readonly type = modalActions.businessToggle;
}


export type ModalActions = AnalysisToggleAction | BusinessToggleAction;
