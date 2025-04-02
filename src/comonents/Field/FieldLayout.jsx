import React from 'react';
import PropTypes from 'prop-types';
import styles from './Field.module.css';

export const FieldLayout = ({ field, handleClick }) => {
  return (
    <div className={styles.field}>
      {field.map((value, index) => (
        <button
          className={styles.square}
          key={index}
          onClick={() => {
            handleClick(index);
          }}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

FieldLayout.propTypes = {
  field: PropTypes.array,
  handleClick: PropTypes.func,
};
