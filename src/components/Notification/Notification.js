import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <p style={{ fontWeight: 700 }}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
