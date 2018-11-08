import React from 'react';
import PropTypes from 'prop-types';

require('./_style.scss');

const Image = props => (
  <img className="a__image" src={props.src} alt={props.alt} />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image;
