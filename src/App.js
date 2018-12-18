import React, { Component } from 'react';
import logo from './snowflake-shape.svg';
import './App.css';
import './bootstrap.min.css';

function NavBar() {
  return(
    <div className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="#">
        <img src={logo} width="30" height="30" className="App-logo d-inline-block align-top" alt="logo" />
        &nbsp;Open Snow
      </a>
    </div>
  );
}

function Hero() {
  return(
    <div className="row" style={{marginTop: 50}}>
      <div className="jumbotron col-10 offset-1">
        <h1>Open Snow</h1>
        <p>Get out there.</p>
        <hr className="my-4"/>
        <a className="btn btn-primary btn-lg" href="#" role="button">View Reports</a>
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="container-fluid">
          <Hero/>
        </div>
      </div>
    );
  }
}

export default App;
