import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../atoms/Title/Title';
import Post from '../../organisms/Post/Post';

import image1 from '../../../static/images/image1.jpg';
import image2 from '../../../static/images/image2.jpg';
import image3 from '../../../static/images/image3.jpg';

require('./_style.scss');

const posts = [
  {
    title: 'I painted this',
    text: 'Congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla',
    image: image1,
  },
  {
    title: 'OMG! I\'m the new face for this awesome Brand!',
    text: 'Congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla',
    image: image2,
  },
  {
    title: 'Sometimes, I like to sit on Windows...',
    text: 'Congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla',
    image: image3,
  }
];

const Home = props => (
  <div>
    <Title text="Photogram" />
    {posts.map((post, i) => {
      return (
        <Post key={i} image={post.image} title={post.title} text={post.text} />
      );
    })}
  </div>
);

export default Home;
