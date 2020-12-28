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

const locale = 'en-US';

const formatDate = date =>
  `${date.toLocaleDateString(locale, {
    weekday: 'long'
  })}, ${date.toLocaleDateString('en-US', {
    month: 'long'
  })} ${date.getDate()}`;


class Schedule extends Component{
  state = {
    selectedDayIndex: 0
  };
  componentDidMount(){
    const now = new Date();
    let i = scheduleData.length;
    while (i-- >0) {
      if (now >= scheduleData[i].date){
        this.setState({ selectedDayIndex: i });
        break;
      }
    }
  }
  render(){
    const {selectedDayIndex} = this.state;
    return(
      <section id = "schedule">
        <Title titleColor = "#adcada">Schedule</Title>
        <div className="twocolumns">
          <div className="col1">
            <div className="SectionTextContent">
              {scheduleData.map(( {date, events}, i) => (
                <Day
                  active = {i === selectedDayIndex}
                  activeColor = '#8becff'
                  key={date}
                  onClick={()=> this.setState({ selectedDayIndex: i})}
                >
                {formatDate(date)}
                </Day>
              ))}
            </div>
          </div>
          <div className="col2">
            <ScheduleItemCard
              titleColor= "ffc18e"
              events={scheduleData[selectedDayIndex].events}
            />
          </div>
        </div>

      </section>
    );
  }
}
export default Schedule;
