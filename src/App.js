import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';


import FilterUser from './containers/FilterUser';


class App extends Component {
  render() {
    return (
      <div className="App">
      <FilterUser />
      </div>
    );
  }
}


const AppConnect = connect()(App);

export default AppConnect