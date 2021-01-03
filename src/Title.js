import React from 'react';
import styled from '@emotion/styled';

const Title = styled('div')`
  font-family: 'opensans-bold', sans-serif;
  font-size: 2.5em;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bolder;
  background-color: ${props =>props.titleColor};
  padding-top: 0.33em;
  margin-bottom: 1em;
  padding-bottom: 0.33em;
  padding-left: 0.2em;
  padding-right: 0.2em;
  color: #fff;
  border-radius: 2%;
  width: 60%;
  min-width: 30%;

  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.3em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
`;

export default ({children, titleColor})=>(
  <React.Fragment>

    <Title titleColor = {titleColor}>{children}</Title>

  </React.Fragment>
)
