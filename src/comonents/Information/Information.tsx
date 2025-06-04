import { useReduxSelector } from '../../redux/hooks';
import { InformationLayout } from './InformationLayout.tsx';

export const Information = () => {
  const isDraw = useReduxSelector((state) => state.isDraw);
  const isGameEnded = useReduxSelector((state) => state.isGameEnded);
  const currentPlayer = useReduxSelector((state) => state.currentPlayer);

  let information = '';
  if (isDraw) {
    information = 'Ничья';
  } else if (!isDraw && isGameEnded) {
    information = `Победа: ${currentPlayer}`;
  } else if (!isDraw && !isGameEnded) {
    information = `Ходит: ${currentPlayer}`;
  }
  return <InformationLayout information={information} />;
};
