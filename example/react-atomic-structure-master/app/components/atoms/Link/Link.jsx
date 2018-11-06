import React      from 'react';
import PropTypes  from 'prop-types';

require('./_style.scss');

const Link = props => (
  <a href={props.link} className={`a__button ${props.type ? props.type : 'primary'}`}>{props.text}</a>
);

Link.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default Link;
