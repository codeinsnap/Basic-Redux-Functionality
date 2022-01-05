//in this file all the function components as attached so that it could forward it to the store


import changeNumber from "./upDown";

import{ combineReducers } from 'redux'

const rootReducer = combineReducers({
    changeNumber
});

export default rootReducer;