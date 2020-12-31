import React, {Component} from 'react';
import Title from '../Title.js';
import styled from '@emotion/styled';
import ScheduleItemCard from './ScheduleItemCard';
import scheduleData from './schedule-data';

const Day = styled('h3')`
  color: '#040404';
  transition: opacity 0.2s;
  cursor: pointer;
  display: table;
  margin-top: 0;
  margin-bottom: 1em;
  padding-bottom: 0.1em;
  border-bottom: 2px solid;
  : hover {
    opacity: 0.85;
  }
  :last-child{
    margin-bottom: 0;
  }
`;


class Schedule extends Component{
  render(){
    return(
      <section id = "schedule">
        <Title titleColor = "#ffc18e">Schedule</Title>
        <div className="container">
          <div className="row">
            <div className = "columns">
              <h1> Time </h1>
            </div>
            <div className = "columns">
              <h1> Event1 </h1>
            </div>
            <div className = "columns">
              <h1> Event2 </h1>
            </div>
            <div className = "columns">
              <h1> Sponsor Event </h1>
            </div>
          </div>

          <div className="row">
            <div className = "columns">
              <p className="time"> 9:45 am </p>
              <p className="time"> 10:00 am </p>
              <p className="time"> 11:00 am </p>
              <p className="time"> 12:00 pm </p>
              <p className="time"> 1:00 pm </p>
              <p className="time"> 2:00 pm </p>
              <p className="time"> 3:00 pm </p>
              <p className="time"> 4:00 pm </p>
              <p className="time"> 5:00 pm </p>
              <p className="time"> 6:00 pm </p>
            </div>
            <div className = "columns">
            <p className="event1"> Opening Ceremony </p>
            <p className="event1"> Keynote Speaker </p>
            <p className="event1"> David Rolnick </p>
            <p className="event1"> Lunch / Break </p>
            <p className="event1"> AJung Moon </p>
            <p className="event1"> William Hamilton </p>
            <p className="event1"> Career Fair </p>
            <p className="event1">  </p>
            <p className="event1"> AI Experiences Panel </p>
            <p className="event1"> Closing ceremony </p>
            </div>
            <div className = "columns">
              <h1> Event2 </h1>
            </div>
            <div className = "columns">
              <h1> Sponsor Event </h1>
            </div>
          </div>

        </div>

      </section>
    );
  }
}
export default Schedule;
