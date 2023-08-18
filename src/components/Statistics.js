import React from 'react';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p>Bueno: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Malo: {bad}</p>
      <p>Total: {total}</p>
      <p>Comentarios positivos: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
