import React, { Component } from 'react';

class FloatingWindowStatusBar extends Component {
  render() {
    return (
      <div className="window-statusbar">
        <span className="window-status">
          Request: Fields and Values
        </span>
        <span className="window-resize-control">
          <i className="icon maximize"></i>
        </span>
      </div>
    );
  }
}

export default FloatingWindowStatusBar;
