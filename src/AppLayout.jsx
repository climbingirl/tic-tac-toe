import styles from './App.module.css';
import { Field } from './comonents/Field/Field';
import { Information } from './comonents/Information/Information';

export const AppLayout = ({
  field,
  setField,
  currentPlayer,
  setCurrentPlayer,
  isGameEnded,
  setIsGameEnded,
  isDraw,
  setIsDraw,
  onGameReset,
}) => {
  return (
    <div className={styles.app}>
      <Information
        isGameEnded={isGameEnded}
        isDraw={isDraw}
        currentPlayer={currentPlayer}
      />
      <Field
        field={field}
        setField={setField}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        isGameEnded={isGameEnded}
        setIsGameEnded={setIsGameEnded}
        setIsDraw={setIsDraw}
      />
      <button className={`btn ${styles['btn-reset']}`} onClick={onGameReset}>
        Начать заново
      </button>
    </div>
  );
};
