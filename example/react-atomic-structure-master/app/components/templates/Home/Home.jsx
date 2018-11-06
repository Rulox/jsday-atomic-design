import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../atoms/Title/Title';
import Link from '../../atoms/Link/Link';

require('./_style.scss');

const Home = props => (
  <div>
    <Title text="Basic React App" />
    <Link text="Like" link="#" type="primary"/>
    <Link text="Share" link="#" type="secondary"/>
  </div>
);

export default Home;
