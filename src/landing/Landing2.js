import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";
import Monster from './mcgillai_monster.png';
import Transparent from './learnathon_title_transparent.png';
import './landing.css';
import logo from './mais-logo.png';

class Landing2 extends Component {

  render() {
    return ( // type "cobweb is pre cool" as is square
      <header id="home">

      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
        <img className="nav-logo" src={logo} alt="mais logo"/>
         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#speakers">Speakers</a></li>
            <li><a className="smoothscroll" href="#schedule2">Schedule</a></li>
            <li><a className="smoothscroll" href="#fair">Fair</a></li>
            <li><a className="smoothscroll" href="#faq">FAQ</a></li>
            <li><a className="smoothscroll" href="#sponsors">Sponsors</a></li>


         </ul>
      </nav>
      <ParticlesBg type="circle" color={["#ffc18e", "#ffa9a8", "#e6e6e6", "8becff"]} bg={true} />

      <div className = "row banner">
          <div className = "banner-text">
            <img src={Transparent} alt="logo"/>
            <h1> Coming to you 6 Feb 2021! </h1>
            <div className="sub-head">
            <h3> New year, new you! Start 2021 with a blast and
            join the most curious students and the most acclaimed researchers
            in Montreal for an 8 hour virtual confernce! </h3>
            </div>
          </div>
      </div>
      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="fa fa-arrow-circle-down"></i></a>
      </p>

   </header>
    );
  }
}

export default Landing2;
