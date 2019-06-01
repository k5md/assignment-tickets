import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const statusMap = {
  'free': 'seat-free',
  'booked': 'seat-booked',
  'taken': 'seat-taken',
  'selected': 'seat-selected',
};

const Seat= ({
  col,
  status,
  onClick,
}) => (
  <div
    className={['seat', 'border', statusMap[status] || ''].join(' ')}
    onClick={onClick}
  >
    {col}
  </div>
);

Seat.propTypes = {
  col: PropTypes.number,
  status: PropTypes.string,
  onClick: PropTypes.func,
};

export default Seat;
