import React, { Component } from 'react';
import logo from './nashvilleSkyline.jpg';
import './App.css';
import './navbar.css';


class App extends Component {
  render() {
    return (
        <div className="App">

            <nav className="title navbar fixed-top">
                <a className = "title-text navbar-brand">Affordable Housing Nashville</a>
            </nav>
            <div className="topnav">
                <a className="active" href="http://localhost:3000">Home</a>
                <a href="http://localhost:3000/login.html">Login</a>
                <a href="http://localhost:3000/register.html">Register</a>
            </div>




          <div className="space">
            <header className="App-header">
              <img src={logo} className="stretch" id="background"/>
                  <div className= "buttons">
                    <span>
                      <a>
                        <form action="register.html">
                          <button type="submit" className="App-button">Register</button>
                        </form>
                      </a>

                      <a>
                        <form action="login.html">
                          <button type="submit" className="App-button" >Login</button>
                        </form>
                      </a>
                    </span>
                  </div>
            </header>
          </div>
        </div>
    );
  }
}

export default App;