import React, { Component } from "react";
import '../AutomationBoard/css/float-windows.css';

import FloatingWindowHeader from './FloatingWindowHeader';
import FloatingWindowContent from './FloatingWindowContent';
import FloatingWindowStatusBar from './FloatingWindowStatusBar';

class FloatingWindow extends Component {
    render() {
      return (
        <div className="window">
          <FloatingWindowHeader />
          <FloatingWindowContent />
          <FloatingWindowStatusBar />
        </div>
      );
    }
  }

  export default FloatingWindow;