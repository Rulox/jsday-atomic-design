import React      from 'react';
import PropTypes  from 'prop-types';

import Paragraph  from '../../atoms/Paragraph/Paragraph';

require('./_style.scss');

const Content = props => (
  <div className="m__content">
    <h4>{props.title}</h4>
    <Paragraph text={props.text} />
  </div>
);

Content.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Content;
