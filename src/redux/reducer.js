import { PLAYER } from '../common/constants';
import { createEmptyField } from '../common/utils';
import {
  SET_FIELD,
  SET_CURRENT_PLAYER,
  SET_IS_GAME_ENDED,
  SET_IS_DRAW,
  RESET_GAME,
} from './actions';

const initialState = {
  field: createEmptyField(),
  currentPlayer: PLAYER.CROSS,
  isGameEnded: false,
  isDraw: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD: {
      return { ...state, field: action.payload };
    }
    case SET_CURRENT_PLAYER: {
      return { ...state, currentPlayer: action.payload };
    }
    case SET_IS_GAME_ENDED: {
      return { ...state, isGameEnded: action.payload };
    }
    case SET_IS_DRAW: {
      return { ...state, isDraw: action.payload };
    }
    case RESET_GAME: {
      return { ...initialState };
    }
    default:
      return state;
  }
};
