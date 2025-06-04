export const SET_FIELD = 'SET_FIELD';
export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
export const SET_IS_GAME_ENDED = 'SET_IS_GAME_ENDED';
export const SET_IS_DRAW = 'SET_IS_DRAW';
export const RESET_GAME = 'RESET_GAME';

export const setField = (newField) => ({
  type: SET_FIELD,
  payload: newField,
});
export const setCurrentPlayer = (playerName) => ({
  type: SET_CURRENT_PLAYER,
  payload: playerName,
});
export const setIsGameEnded = (isGameEnded) => ({
  type: SET_IS_GAME_ENDED,
  payload: isGameEnded,
});
export const setIsDraw = (isDraw) => ({ type: SET_IS_DRAW, payload: isDraw });
export const resetGame = () => ({ type: RESET_GAME });
