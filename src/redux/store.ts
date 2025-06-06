import { createStore, Store } from 'redux';
import { reducer } from './reducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { GameState } from './types';
import { ActionType } from './actions';

export const store: Store<GameState, ActionType> = createStore(
  reducer,
  composeWithDevTools()
);
