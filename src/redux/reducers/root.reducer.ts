import { combineReducers } from "redux";
import { loaderReducer } from './toggle-loader.reducer';

export const rootReducer = combineReducers({
    loaderReducer
});