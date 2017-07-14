import React, { Component } from 'react';
import './timeline.css';
import MonthHeader from './MonthHeader';
import EventCard from './EventCard';

class Timeline extends Component {
  constructor() {
    super();
    this.state = {
      currentMonth: ''
    }
    this.handleHide=this.handleHide.bind(this);
  }
  handleHide(month) {
    this.setState({
      currentMonth: month.props.content
    })
  }
  render() {
    return (
      <div className="timeline-container">
        {/* <div className="timeline-line"></div> */}
        <div className="timeline-event-container">
          <h1 className="timeline-current-month">{this.state.currentMonth}</h1>
          <MonthHeader contet="July 2017" onHide={this.handleHide}/>
          <EventCard />
          <EventCard />
          <EventCard />
          <MonthHeader content="June 2017" onHide={this.handleHide}/>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />

        </div>
      </div>
    );
  }
}

export default Timeline;
