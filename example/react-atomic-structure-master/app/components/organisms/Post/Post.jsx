import React      from 'react';
import PropTypes  from 'prop-types';

import Photo from '../../molecules/Photo/Photo';
import Content from '../../molecules/Content/Content';

require('./_style.scss');

const Post = props => (
  <div className="o__post">
    <Photo image={props.image}/>
    <Content title={props.title} text={props.text} />
  </div>
);

Post.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string
};

export default Post;
