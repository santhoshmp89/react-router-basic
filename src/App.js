import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    alert(this.props.location.pathname, "Path name from this.props.location.path");
    console.log(this.props.location.pathname, "Path name from this.props.location.path")
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Home />
        <About />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
