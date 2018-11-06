import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/templates/Home/Home';

require('./_style.scss');

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);

if (typeof window !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('app'));
}
