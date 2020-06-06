import React from 'react';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment(),
      ellapsed: moment(),
    };
  }

  setTime() {
    this.setState({ ellapsed: moment() });
  }

  componentDidMount() {
    this.time = setInterval(() => this.setTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  getDuration() {
    return moment.duration(this.state.ellapsed.diff(this.state.time));
  }

  getEllapsedHours() {
    return parseInt(this.getDuration().asHours(), 10);
  }

  getEllapsedMinutes() {
    const hours = this.getEllapsedHours();
    return parseInt(this.getDuration().asMinutes() - 60 * hours, 10);
  }

  getRemaining() {
    return moment(
      moment(this.props.duration, 'hour').diff(
        this.state.ellapsed.diff(this.state.time),
      ),
    );
  }

  getRemainingHours() {
    return this.getRemaining().format('h');
  }

  getRemainingMinutes() {
    return this.getRemaining().format('mm');
  }

  render() {
    const { show, duration, rate } = this.props;

    const visibility = {
      visibility: show ? 'visible' : 'hidden',
    };
    return (
      <div className="tooltip" style={visibility}>
        <div className="tooltip_header">
          <div className="tooltip_header_icon">&#xf017;</div>
          <div className="tooltip_header_text">
            {this.state.time.format('h:mm')}
          </div>
          <div>
            <span>{this.getEllapsedHours()}</span>
            hr&nbsp;
            <span>{this.getEllapsedMinutes()}</span>
            min
          </div>
        </div>
        <ul className="tooltip_body">
          <li>
            Duration:&nbsp;
            <span>{duration}</span>
            hrs
          </li>
          <li>
            Rate:&nbsp;$
            <span>{rate}</span>
            &#47;hr
          </li>
          <li>
            Remaining time:&nbsp;
            <span>{this.getRemainingHours()}</span>
            hr&nbsp;
            <span>{this.getRemainingMinutes()}</span>
            min
          </li>
        </ul>
        <div className="tooltip_footer">
          <div className="tooltip_footer_text">
            <span>Alert</span>
          </div>
          <div className="tooltip_footer_icon">&#xf15c;</div>
          <div className="tooltip_footer_icon">&#xf013;</div>
        </div>
        <span className="tooltip_arrow" />
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  handleOnMouseEnter() {
    this.setState({ hover: true });
  }

  handleOnMouseLeave() {
    this.setState({ hover: false });
  }

  render() {
    return (
      <div className="container">
        <div
          className="hover"
          onMouseEnter={() => this.handleOnMouseEnter()}
          onMouseLeave={() => this.handleOnMouseLeave()}
        >
          Hover Me!
          <Tooltip duration={3} rate={2} show={this.state.hover} />
        </div>
      </div>
    );
  }
}
