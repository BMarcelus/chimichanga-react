import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class MonthHeader extends Component {
  constructor() {
    super();
    this.state = {
      visibility: ''
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll() {
    const scroll = document.body.scrollTop;
    const el = ReactDOM.findDOMNode(this);
    const top = el.getBoundingClientRect().top;
    if (top<=0) {
      this.setState({visibility: 'hidden'})
      this.props.onHide(this);
    } else {
      this.setState({visibility: ''});
    }
  }
  render() {
    return (
      <h1 className="timeline-month" style={{visibility: this.state.visibility}}>{this.props.content}</h1>
    );
  }
}

MonthHeader.defaultProps = {
  content: "July 2017",
  onHide: () => {},
}

export default MonthHeader;
