import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap';
import './App.css';
import Main from './components/MainComponent';
import { render } from '@testing-library/react';

class App extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="App">
      <Main />
    </div>
    );
  }
}

export default App;
