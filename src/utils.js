export const calcWinner = (field) => {
  const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const pattern of WIN_PATTERNS) {
    const [a, b, c] = pattern;
    if (field[a] && field[a] === field[b] && field[a] === field[c]) {
      return field[a];
    }
  }
  return null;
};

export const hasEmptySquare = (field) => field.some((el) => el === null);
