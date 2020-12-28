import React from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

const Title = styled('div')`
  font-family: 'Montserrat-Medium', sans-serif;
  font-size: 2.5em;
  font-weight: bolder;
  color: ${props =>props.titleColor};
  padding-top: 0.33em;
  padding-bottom: 1em;
`;

export default ({children, titleColor})=>(
  <React.Fragment>
    <Title titleColor = {titleColor}>{children}</Title>
  </React.Fragment>
)
