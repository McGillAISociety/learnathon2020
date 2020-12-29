import React, {Component} from 'react';
import styled from '@emotion/styled';
import Title from '../Title.js';

class About extends Component {
  render(){
    return (
        <section id = "about">
          <Title titleColor = "#ffc18e"> Montreal's Most Exciting
          And Student Friendly AI Conference </Title>
          <p> McGill AI have organised a series of tailored talks
          and events in the form of a conference, open to interested,
          curious, and ambitious students from high school to graduate level.
          Come and listen to some of the most acclaimed researchers in the
          diverse field of AI!
          </p>

      </section>
    );
  }
}
export default About;
