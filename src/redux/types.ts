import { Player } from '../common/constants';

export interface GameState {
  field: Player[];
  currentPlayer: Player;
  isGameEnded: boolean;
  isDraw: boolean;
}

export type ActionType =
  | { type: 'SET_FIELD'; payload: Player[] }
  | { type: 'SET_CURRENT_PLAYER'; payload: Player }
  | { type: 'SET_IS_GAME_ENDED'; payload: boolean }
  | { type: 'SET_IS_DRAW'; payload: boolean }
  | { type: 'RESET_GAME' };
