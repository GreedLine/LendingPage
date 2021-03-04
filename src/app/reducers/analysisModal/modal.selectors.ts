import {createFeatureSelector, createSelector} from '@ngrx/store';
import {modalNode, ModalState} from './modal.reducer';

export const selectModalFeature = createFeatureSelector<ModalState>(modalNode);

export const selectAnalysisModal = createSelector(
    selectModalFeature,
    (state: ModalState): boolean => state.analysisIsOpen
);

export const selectBusinessModal = createSelector(
    selectModalFeature,
    (state: ModalState): boolean => state.businessIsOpen
);
