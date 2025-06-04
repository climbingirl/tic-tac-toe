import styles from './Field.module.css';
import { Player } from '../../common/constants';

interface FieldLayoutProps {
  field: Player[];
  onMove: (index: number) => void;
}

export const FieldLayout = ({ field, onMove }: FieldLayoutProps) => {
  return (
    <div className={styles.field}>
      {field.map((value, index) => (
        <button
          className={styles.square}
          key={index}
          onClick={() => {
            onMove(index);
          }}
        >
          {value}
        </button>
      ))}
    </div>
  );
};
