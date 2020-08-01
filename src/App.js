import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent';
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store} >
      <BrowserRouter>
      <div className="App">
      <Main />
    </div>
    </BrowserRouter>
    </Provider>
    );
  }
}

export default App;
