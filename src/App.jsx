import { useState } from 'react';
import { AppLayout } from './AppLayout';

export const App = () => {
  const [field, setField] = useState(new Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('x');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const handleGameReset = () => {
    setField(new Array(9).fill(null));
    setCurrentPlayer('x');
    setIsGameEnded(false);
    setIsDraw(false);
  };

  return (
    <AppLayout
      field={field}
      setField={setField}
      currentPlayer={currentPlayer}
      setCurrentPlayer={setCurrentPlayer}
      isGameEnded={isGameEnded}
      setIsGameEnded={setIsGameEnded}
      isDraw={isDraw}
      setIsDraw={setIsDraw}
      onGameReset={handleGameReset}
    />
  );
};
