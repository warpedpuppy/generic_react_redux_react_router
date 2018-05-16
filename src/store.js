import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';
import thunk from 'redux-thunk';

const initialState = window.INITIAL_STATE;
const middleware = applyMiddleware(thunk,logger);
 
export default createStore(reducers,initialState, middleware);