import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Router from './Router';
import './App.css';

const Navigation = (props) => {
  return (

  <nav>
<ul className='nav-ul'>
  <li><NavLink style={{textDecoration: 'none', color: 'black'}}to ='/'>Home</NavLink></li>
  <li><NavLink to ='/cart'>Cart</NavLink></li>
</ul>
  </nav>
  )
}

class App extends Component {
  render() {
    return (
<div>
  <Navigation />
  <Router />
</div>
    );
  }
}

export default App;
