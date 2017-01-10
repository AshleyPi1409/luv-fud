import React from 'react';
import Layout from '../components/Layout.jsx';
import Home from '../components/Home.jsx';
import Receipt from '../components/Receipt.jsx';
import About from '../components/About.jsx';

import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <Router history = {browserHistory}>
          <Route path = "/" component = {Layout}>
            <IndexRoute component = {Home} />
            <Route path = "/receipt" component = {Receipt} />
            <Route path = "/about" component = {About} />
          </Route>
      </Router>
    );
  }
}
export default App;
