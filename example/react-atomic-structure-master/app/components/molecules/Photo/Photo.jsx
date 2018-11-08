import React      from 'react';
import PropTypes  from 'prop-types';

import Image  from '../../atoms/Image/Image';
import Link  from '../../atoms/Link/Link';

require('./_style.scss');

const Photo = props => (
  <div className="m__photo">
    <Image src={props.image} alt="Blog image" />
    <Link text="Like" link="#" type="primary"/>
    <Link text="Share" link="#" type="secondary"/>
  </div>
);

Photo.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Photo;
