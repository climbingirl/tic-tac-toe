import { InformationLayout } from './InformationLayout.tsx';
import { useAppSelector } from '../../redux/hooks.ts';

export const Information = () => {
  const isDraw = useAppSelector((state) => state.isDraw);
  const isGameEnded = useAppSelector((state) => state.isGameEnded);
  const currentPlayer = useAppSelector((state) => state.currentPlayer);

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
