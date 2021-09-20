import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import { filtersReducer } from "./filters/reducers";

const rootReducer = combineReducers({
    'filters': filtersReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());