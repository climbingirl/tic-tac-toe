import { AppLayout } from './AppLayout.tsx';
import { PLAYER } from './common/constants';
import { store } from './redux/store';
import {
  resetGame,
  setCurrentPlayer,
  setField,
  setIsDraw,
  setIsGameEnded,
} from './redux/actions';
import { useReduxSelector } from './redux/hooks';
import { calcWinner, hasEmptySquare } from './common/utils';

export const App = () => {
  const field = useReduxSelector((state) => state.field);
  const isGameEnded = useReduxSelector((state) => state.isGameEnded);
  const currentPlayer = useReduxSelector((state) => state.currentPlayer);
  const dispatch = store.dispatch;

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
