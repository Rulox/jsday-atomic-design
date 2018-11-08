import React      from 'react';
import PropTypes  from 'prop-types';

import Photo from '../../molecules/Photo/Photo';

require('./_style.scss');

const Post = props => (
  <div>
    <Photo image={props.image}/>
  </div>
);

Post.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string
};

export default Post;
