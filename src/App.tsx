import { AppLayout } from './AppLayout.tsx';
import { PLAYER } from './common/constants';
import {
  resetGame,
  setCurrentPlayer,
  setField,
  setIsDraw,
  setIsGameEnded,
} from './redux/actions';
import { calcWinner, hasEmptySquare } from './common/utils';
import { useAppDispatch, useAppSelector } from './redux/hooks.ts';

export const App = () => {
  const field = useAppSelector((state) => state.field);
  const isGameEnded = useAppSelector((state) => state.isGameEnded);
  const currentPlayer = useAppSelector((state) => state.currentPlayer);
  const dispatch = useAppDispatch();

  const handleGameReset = (): void => {
    dispatch(resetGame());
  };

  const handleMove = (squareIndex: number): void => {
    if (field[squareIndex] || isGameEnded) return;

    const newField = field.slice();
    newField[squareIndex] = currentPlayer;

    if (calcWinner(newField)) {
      dispatch(setIsGameEnded(true));
    } else if (!hasEmptySquare(newField) && !isGameEnded) {
      dispatch(setIsDraw(true));
      dispatch(setIsGameEnded(true));
    } else {
      dispatch(
        setCurrentPlayer(currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS)
      );
    }

    dispatch(setField(newField));
  };

  return <AppLayout onGameReset={handleGameReset} onMove={handleMove} />;
};
