import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/home">
          Easyfit
        </a>
        <div className="menu">
          <a href="/home" className="home">
            home
          </a>
          <NavLink to="/app" className="app">
            app
          </NavLink>
          <a href="/how">how</a>
        </div>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-white">
              <span id="account">{this.props.account}</span>
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
