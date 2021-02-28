export interface ModalState {
    isOpen: boolean;
}

const initialState: ModalState = {
    isOpen: false,
};

export const modalReducer = (
    state = initialState, action
) => {
    return state;
}
