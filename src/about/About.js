import React, {Component} from 'react';
import Title from '../Title.js';
import monster from './char3.png';

class About extends Component {
  render(){
    return (
        <section id = "about">

          <div className = "background-monster">
          <img className = "background-monster" src={monster} alt="monster"/>
          <Title titleColor = "#ffc18e"> Montreal's Most Exciting
          And Student Friendly AI Conference </Title>
          <p> McGill AI have organised a series of tailored talks
          and events in the form of a conference, open to interested,
          curious, and ambitious students from high school to graduate level.
          Come and listen to some of the most acclaimed researchers in the
          diverse field of AI!
          </p>
          </div>
      </section>
    );
  }
}
export default About;
