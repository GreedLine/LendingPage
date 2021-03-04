import {ActionReducerMap, MetaReducer} from '@ngrx/store';

import {environment} from '../../environments/environment';
import {modalNode, modalReducer, ModalState} from './analysisModal/modal.reducer';

export interface State {
    [modalNode]: ModalState;
}

export const reducers: ActionReducerMap<State> = {
// @ts-ignore
    [modalNode]: modalReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
