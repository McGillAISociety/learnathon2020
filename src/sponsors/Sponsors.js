import React, {Component} from 'react';
import Title from '../Title.js';
import monstersponsor from './char5.png';
import SponsorLogos from './SponsorLogos';

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
            <SponsorLogos/>
          </div>
        </div>
      </section>
    );
  }
}
export default Sponsors;
