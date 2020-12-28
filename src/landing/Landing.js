import React from 'react';
import styled from '@emotion/styled';

import './landing.css';


const Container = styled('div')`
  width: 940px;
  background: #fff;
  display: flex;
  padding-top: 50px;
  padding-bottom: 0px;
  margin-bottom: 0px;
`;

const LandingCont = styled('div')`
  font-size: 1.5em;
  width:100%
  padding-bottom:20px;
  display: inline-block;
`;



export default ({id, titleColor }) => (
  <Container id = {id}>
    <header>
      <div class="header_bg"></div>
      <h1> Header Content </h1>
    </header>
  </Container>

);
