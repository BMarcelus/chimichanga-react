import React from 'react';

import './eventCard.css'

const EventCard = (props) => {
  return (
    <div className="event-container">
      <img className="event-icon"
        src={props.icon}
        alt="event type"
      />
      <div className="event-card-container">
        <div className="event-header-container">
          <img className="event-title-icon"
            src={props.titleIcon}
            alt="icon"
          />
          <div className="event-title-container">
            <span className="event-title">{props.title}</span>
            <span className="event-title-date">{props.date}</span>
          </div>
        </div>
        <div className="event-content-container">
          <div className="event-content">{props.content}</div>
        </div>
      </div>
    </div>
  );
}

EventCard.defaultProps = {
  titleIcon: "https://placeholdit.imgix.net/~text?txtsize=28&bg=0099ff&txtclr=ffffff&txt=icon2&w=100&h=100",
  icon: "https://placeholdit.imgix.net/~text?txtsize=28&bg=0099ff&txtclr=ffffff&txt=icon&w=100&h=100",
  title: "Title",
  date: "Date",
  content: "Content"
}

export default EventCard;
