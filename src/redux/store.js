import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { settingsReducer } from './settingsReducer';

const rootReducer = combineReducers({
  settings: settingsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
