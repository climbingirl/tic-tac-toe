import { Player } from '../common/constants';

export interface GameState {
  field: Player[];
  currentPlayer: Player;
  isGameEnded: boolean;
  isDraw: boolean;
}
