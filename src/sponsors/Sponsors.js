import React, {Component} from 'react';
import Title from '../Title.js';
import monstersponsor from './char5.png';
import SponsorLogos from './SponsorLogos';
import Button from '../Button.js';

class Sponsors extends Component {
  render(){
    return (
      <section id = "sponsors">
        <Title titleColor = "#8becff"> Sponsors </Title>
        <div className = "row">
        <div className="column">
          <h2> Thank you to our current sponsors! </h2>
          <div className="logo-wrapper">

            <SponsorLogos/>
          </div>
        </div>
          <div className ="column">
            <h2> Interested in sponsoring?</h2>
            <p>Click below to contact us about sponsorship! <br/>
              This event aims to connect students and industry. We will be hosting a career
              fair and sponsors will have the chance to give a talk or a workshop too. Come show
              our attendees your company and the work you do! </p>
              <Button color="#fff" bgcolor="#808080" fontsize="15px"
                href="mailto:mcgillaicontact@gmail.com" alt="contact mcgill ai">
                Sponsor McGill AI <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></Button>
          </div>

        </div>
      </section>
    );
  }
}
export default Sponsors;
