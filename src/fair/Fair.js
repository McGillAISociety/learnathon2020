import React, {Component} from 'react';
import Title from '../Title.js';
import monster from './char5.png';
import Button from '../Button.js';

class Fair extends Component{
  render(){
    return(
      <section id="fair">
        <div className="fair-content">
          <div class="wrapper">

            <div class = "column">
              <div class="inner-column">
                <Title titleColor='#8becff'>Poster Fair</Title>
                <Button color="#fff" bgcolor="#ffa9a8" fontsize="1.4em" href="https://www.spca.com/en/adoption/cats-for-adoption/" alt="cats for adoption filler" target="_blank" rel="noopener noreferrer">
                  Apply now!  <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></Button>
              </div>
            </div>
            <div class = "column">
              <p> <br/>From 3-5pm ET on 6th February, the McGill AI
              Learnathon team will be running an undergraduate poster presentation!
              Come share your coolest AI related projects or research with all attendees,
              and then browse what others have accomplished. Example projects include
              research work under a professor, a final project for a course, or
              a side-project you're particularly proud of.
              <br/>
              This event will be run on gather.town. <br/>Application required by DEADLINE. </p>
              <img src={monster} alt="monster dude" className="monster"/>
            </div>

          </div>
        </div>
      </section>
    );
  }
}
export default Fair;
