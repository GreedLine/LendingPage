import {ActionReducerMap, MetaReducer} from '@ngrx/store';

import {environment} from '../../environments/environment';
import {modalReducer, ModalState} from './analysisModal/modal.reducer';

export interface State {
    isOpen: ModalState;
};

export const reducers: ActionReducerMap<State> = {
    isOpen: modalReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
