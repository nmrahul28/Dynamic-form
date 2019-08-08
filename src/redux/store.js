import {createStore, combineReducers,applyMiddleware} from 'redux';
import formapi from './reducers/reducer.js';
import thunk from 'redux-thunk';


export default createStore(combineReducers({
    form_data:formapi
}),applyMiddleware(thunk));