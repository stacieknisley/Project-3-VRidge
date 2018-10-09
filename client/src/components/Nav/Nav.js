import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import "./Nav.css";
import logo from "./images/logo.png";
import { Row } from 'react-bootstrap';



class Nav extends Component {
  // state = {
  //   user: this.props.match.params.user
  // }
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const location = window.location.pathname;
    const user = location.split('/')[2];
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
        <div className="container">
          <a className="navbar-brand" href="#"><img src={logo} width="140" height="70" /></a>
          {/* <ButtonNav  onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </ButtonNav> */}
          <div className={`${classOne}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-fluid">

          <ul className="nav nav-tabs">

            <li className="nav-item">
              <Link
                to={"/groceryList/" + user}
                className={
                  window.location.pathname === "/groceryList" ? "nav-link active" : "nav-link"
                }
              >
                Grocery List
      </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/myFridge/" + user}
                className={
                  window.location.pathname === "/myFridge" ? "nav-link active" : "nav-link"
                }
              >
                My Fridge
      </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/recipe/" + user}
                className={
                  window.location.pathname === "/recipe" ? "nav-link active" : "nav-link"
                }
              >
                Recipe
      </Link>
            </li>
          </ul>
        </div>

      </nav>
    );
  }
}

export default Nav;