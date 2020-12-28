import React, {Component} from 'react';
import styled from '@emotion/styled';
import Title from '../Title.js';

class About extends Component {
  render(){
    return (
      <section id = "about">
      <div className = "row">
          <Title titleColor = "#1b172a"> About Section </Title>

          <p> Hi testing this out! Kido is Awesome </p>
          <h2> This is where we write what the Learnathon is about </h2>

      </div>
      </section>
    );
  }
}
export default About;
