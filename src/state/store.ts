import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import JoinReducer from './reducers/JoinReducer';
import chatReducer from './reducers/chat'
import alert from './reducers/alert-reducer';

const rootReducer = combineReducers({
  JoinReducer,
  alert,
  chatReducer
});

// @ts-expect-error
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export type RootState = ReturnType<typeof rootReducer>;
