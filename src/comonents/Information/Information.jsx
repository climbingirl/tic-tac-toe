import React from 'react';
import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout';

export const Information = (props) => {
  return <InformationLayout {...props} />;
};

Information.propTypes = {
  currentPlayer: PropTypes.oneOf(['x', 'o']),
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
};
