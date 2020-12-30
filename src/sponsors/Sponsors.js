import React, {Component} from 'react';
import styled from '@emotion/styled';
import Title from '../Title.js';
import monstersponsor from './char5.png';

class Sponsors extends Component {
  render(){
    return (
      <section id = "sponsors">
        <Title titleColor = "#8becff"> Sponsors </Title>
        <div className = "row">
          <div className ="column">
            <p> A big thank you to our sponsors! </p>
            <p> Interested in sponsoring us?</p>
            <p> button will go here to email Philip </p>
          </div>
          <div className="column">
            <p> Sponsor Logos go here! </p>
            <img src={monstersponsor} alt="monster sponsor"></img>
          </div>
        </div>
      </section>
    );
  }
}
export default Sponsors;
