import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../atoms/Title/Title';
import Post from '../../organisms/Post/Post';

import image1 from '../../../static/images/image1.jpg';
import image2 from '../../../static/images/image2.jpg';
import image3 from '../../../static/images/image3.jpg';

require('./_style.scss');

const posts = []; // Fake list of posts.

const Home = props => (
  <div>
    <Title text="Photogram" />
    <Post image={image1} />
    <Post image={image2} />
    <Post image={image3} />
  </div>
);

export default Home;
