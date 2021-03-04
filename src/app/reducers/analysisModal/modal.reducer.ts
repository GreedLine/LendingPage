import {ModalActions, modalActions} from './modal.actions';

export const modalNode = 'modal';

export interface ModalState {
    analysisIsOpen: boolean;
    businessIsOpen: boolean;

}

const initialState: ModalState = {
    analysisIsOpen: false,
    businessIsOpen: false,
};

export const modalReducer = (
    state = initialState, action: ModalActions
) => {
    switch (action.type) {
        case modalActions.analysisToggle:
            return {
                ...state,
                analysisIsOpen: !state.analysisIsOpen
            };
        case modalActions.businessToggle:
            return {
                ...state,
                businessIsOpen: !state.businessIsOpen
            };
        default:
            return state;

    }
};
