import { Player } from '../common/constants';
import { ActionType } from './types';

export const SET_FIELD = 'SET_FIELD';
export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
export const SET_IS_GAME_ENDED = 'SET_IS_GAME_ENDED';
export const SET_IS_DRAW = 'SET_IS_DRAW';
export const RESET_GAME = 'RESET_GAME';

export const setField = (newField: Player[]): ActionType => ({
  type: SET_FIELD,
  payload: newField,
});

export const setCurrentPlayer = (playerName: Player): ActionType => ({
  type: SET_CURRENT_PLAYER,
  payload: playerName,
});

export const setIsGameEnded = (isGameEnded: boolean): ActionType => ({
  type: SET_IS_GAME_ENDED,
  payload: isGameEnded,
});

export const setIsDraw = (isDraw: boolean): ActionType => ({
  type: SET_IS_DRAW,
  payload: isDraw,
});

export const resetGame = (): ActionType => ({
  type: RESET_GAME,
});
