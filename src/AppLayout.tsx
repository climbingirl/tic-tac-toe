import styles from './App.module.css';
import { Field } from './comonents/Field/Field.tsx';
import { Information } from './comonents/Information/Information.tsx';

interface AppLayoutProps {
  onGameReset: () => void;
  onMove: (index: number) => void;
}

export const AppLayout = ({ onGameReset, onMove }: AppLayoutProps) => {
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
