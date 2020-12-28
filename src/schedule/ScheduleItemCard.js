import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/react';


const dateColSmWidth = '168px';
const dateColMedWidth = '190px';
const dateColLgWidth = '210px';

const CardBase = styled('div')`
  flex-grow: 1;
  flex-basis: 0;
  padding: 0;

  background-color: '#8becff';
  background-size: ${dateColSmWidth};
  @media screen and (min-width: 480px) {
    background-size: ${dateColMedWidth};
  }
  @media screen and (min-width: 900px) {
    background-size: ${dateColLgWidth};
  }
`;

const rowItemPadding = css`
  padding: 10px 15px;

  @media screen and (min-width: 480px) {
    padding: 10px 20px;
  }
  @media screen and (min-width: 900px) {
    padding: 10px 30px;
  }
`;

const EventTime = styled('div')`
  flex-basis: ${dateColSmWidth};
  @media screen and (min-width: 480px) {
    flex-basis: ${dateColMedWidth};
  }
  @media screen and (min-width: 900px) {
    flex-basis: ${dateColLgWidth};
  }
  flex-grow: 0;
  flex-shrink: 0;
  text-align: right;
  font-weight: bold;
  ${rowItemPadding};
`;

const EventDetails = styled('div')`
  ${rowItemPadding};
`;

const EventDetailsText = styled('div')`
  display: block;
  font-size: 0.9em;
  color: #2b2b2b;

`;

const EventRow = styled('div')`
  display: flex;

  color: #2b2b2b;
  font-size: 1.0333em;
  @media screen and (min-width: 480px) {
    font-size: 1.0333em;
  }
  line-height: 1.44em;
  :first-child > div {
    padding-top: 20px;
  }
  :last-child > div {
    padding-bottom: 20px;
  }
`;

export default ({ titleColor, events }) => (
  <CardBase >
    {events.map(({ time, name, locations }) => (
      <EventRow key={time + name}>
        <EventTime>{time}</EventTime>
        <EventDetails>
          <EventDetailsText primary={true} primaryColor='#2b2b2b'>
            {name}
          </EventDetailsText>
          {locations &&
            locations.map(loc => (
              <EventDetailsText key={loc}>{loc}</EventDetailsText>
            ))}
        </EventDetails>
      </EventRow>
    ))}
  </CardBase>
);
