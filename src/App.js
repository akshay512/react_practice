import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent';
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import { render } from '@testing-library/react';

class App extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Main />
    </div>
    </BrowserRouter>
    );
  }
}

export default App;
