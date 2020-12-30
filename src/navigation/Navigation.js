import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

class Navigation extends Component{
  render(){
    return(
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
        <ul id="nav" className="nav">
          <li>
            <NavLink exact className="smoothscroll" activeClassName="current" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact className="smoothscroll" activeClassName="current" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact className="smoothscroll" activeClassName="current" to="/speakers">
              Speakers
            </NavLink>
          </li>
          <li>
            <NavLink exact className="smoothscroll" activeClassName="current" to="/schedule">
              Schedule
            </NavLink>
          </li>
          <li>
            <NavLink exact className="smoothscroll" activeClassName="current" to="/faq">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink exact className="smoothscroll" activeClassName="current" to="/sponsors">
              Sponsors
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navigation;
