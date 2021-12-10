import React from 'react';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <div>
      {<h1 style={{ color: 'purple' }}> {title}</h1>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
