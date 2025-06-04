import styles from './App.module.css';
import { Field } from './comonents/Field/Field';
import { Information } from './comonents/Information/Information';

export const AppLayout = ({ onGameReset, onMove }) => {
  return (
    <div className={styles.app}>
      <Information />
      <Field onMove={onMove} />
      <button className={`btn ${styles['btn-reset']}`} onClick={onGameReset}>
        Начать заново
      </button>
    </div>
  );
};
