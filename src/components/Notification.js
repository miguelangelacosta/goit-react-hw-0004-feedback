import React from 'react';
import PropTypes from 'prop-types';

function Notification({ mensaje }) {
  return <p>{mensaje}</p>;
}

Notification.propTypes = {
  mensaje: PropTypes.string.isRequired,
};

export default Notification;
