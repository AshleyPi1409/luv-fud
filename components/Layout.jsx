import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component{
  render() {
    return (
      <header>
        <h1>Header</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/receipt'>Receipt</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </header>
      
    );
  }
}

class Footer extends React.Component{
  render() {
    return (
      <h3>Footer</h3>
    );
  }
}

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default Layout;
