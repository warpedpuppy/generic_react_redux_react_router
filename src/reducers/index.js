import {combineReducers} from 'redux';
import listReducer from "./listReducer";
import themeReducer from "./themeReducer";

export default combineReducers({
        listReducer,
        themeReducer
})