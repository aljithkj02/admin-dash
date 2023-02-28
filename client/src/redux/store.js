import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './authReducer/reducer';

const store = createStore(authReducer, applyMiddleware(thunk));

store.subscribe(()=> console.log(store.getState()));

export default store;