export type Player = 'Х' | 'O' | null;

export const PLAYER: Record<string, Player> = {
  CROSS: 'Х',
  NOUGHT: 'O',
  NOBODY: null,
};

export const WIN_PATTERNS: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
