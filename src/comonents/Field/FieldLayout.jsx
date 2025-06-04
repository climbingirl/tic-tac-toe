import styles from './Field.module.css';

export const FieldLayout = ({ field, onMove }) => {
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
