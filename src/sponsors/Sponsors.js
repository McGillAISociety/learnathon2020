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
            <h2> Interested in sponsoring McGill AI?</h2>
            <p>Reach out to <a href="mailto:mcgillaicontact@gmail.com" alt="VP External Email"
              rel="noopener noreferrer"> Philip Tam, VP External</a> to
              learn more about our sponsorship package! <br/>
              This event aims to connect students and industry. We will be hosting a career
              and sponsors will have the chance to give a talk or a workshop too. Come show
              our attendees your company and the work you do. </p>
            <p> button will go here to email Philip </p>
          </div>
          <div className="column">
            <div className="logo-wrapper">
              <SponsorLogos/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Sponsors;
