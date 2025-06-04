import { createStore, Store } from 'redux';
import { reducer } from './reducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { ActionType, GameState } from './types';

export const store: Store<GameState, ActionType> = createStore(
  reducer,
  composeWithDevTools()
);
