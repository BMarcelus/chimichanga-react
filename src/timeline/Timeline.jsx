import React, { Component } from 'react';
import './timeline.css';
import EventCard from './EventCard';

class Timeline extends Component {
  render() {
    return (
      <div className="timeline-container">
        {/* <div className="timeline-line"></div> */}
        <div className="timeline-event-container">
          <h1>July 2017</h1>
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    );
  }
}

export default Timeline;
