import { TOGGLE_LOADER } from '../types/toggle-loader.types';

const initialState = {
    isShowLoader: false
}

export const loaderReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_LOADER:
            state = { ...state, isShowLoader: action.payload };
            break;
    }
    return state;
};