import { createStore } from 'redux';
import { reducer } from './reducer';
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = createStore(reducer, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
