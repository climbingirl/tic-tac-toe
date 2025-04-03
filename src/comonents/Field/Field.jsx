import React from 'react';
import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';
import { calcWinner, hasEmptySquare } from '../../utils';

export const Field = ({
  field,
  setField,
  currentPlayer,
  setCurrentPlayer,
  isGameEnded,
  setIsGameEnded,
  setIsDraw,
}) => {
  const handleClick = (index) => {
    if (field[index] || isGameEnded) return;
    const newField = field.slice();
    newField[index] = currentPlayer;
    if (calcWinner(newField)) {
      setIsGameEnded(true);
    } else if (!hasEmptySquare(newField) && !isGameEnded) {
      setIsDraw(true);
      setIsGameEnded(true);
    } else {
      setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');
    }
    setField(newField);
  };

  return <FieldLayout field={field} handleClick={handleClick} />;
};
