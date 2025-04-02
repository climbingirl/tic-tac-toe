import React from 'react';
import PropTypes from 'prop-types';
import styles from './Information.module.css';

export const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
  let content = '';

  if (isDraw) {
    content = 'Ничья';
  } else if (!isDraw && isGameEnded) {
    content = `Победа: ${currentPlayer?.toUpperCase()}`;
  } else if (!isDraw && !isGameEnded) {
    content = `Ходит: ${currentPlayer?.toUpperCase()}`;
  }

  return <div className={styles.info}>{content}</div>;
};

InformationLayout.propTypes = {
  currentPlayer: PropTypes.oneOf(['x', 'o']),
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
};
