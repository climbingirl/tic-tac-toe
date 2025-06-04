import { PLAYER, WIN_PATTERNS } from './constants';

export const calcWinner = (field) => {
  for (const pattern of WIN_PATTERNS) {
    const [a, b, c] = pattern;
    if (field[a] && field[a] === field[b] && field[a] === field[c]) {
      return field[a];
    }
  }
  return PLAYER.NOBODY;
};

export const hasEmptySquare = (field) => field.some((el) => el === PLAYER.NOBODY);

export const createEmptyField = () => new Array(9).fill(PLAYER.NOBODY);
