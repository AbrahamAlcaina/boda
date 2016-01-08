import React, { PropTypes } from 'react';

const machine = ({ image }) => {
  return (
    <img src={image} />
  );
};

machine.propTypes = {
  image: PropTypes.string.isRequired
};

export default machine;
