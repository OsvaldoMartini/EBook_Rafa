import React, {Component, expandWindow , compressWindow} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class FloatingWindowControl extends Component {
  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   expandWindow: false,
  //   //   compressWindow: false
  //   // };
  // }
  
    render() {
      return (
        <span className="window-control">
          <i className="icon minus"></i>
          <i className="icon expand" onClick={this.props.expandWindow}></i>
          <i className="icon remove"></i>
        </span>
      );
    }  
  }

  FloatingWindowControl.propTypes = {
    expandWindow: PropTypes.func,
    compressWindow: PropTypes.func,
   };
  
  const mapStateToProps = state => ({
    expandWindow: state.expandWindow,
    compressWindow: state.compressWindow,
  });
  
  export default connect(
    mapStateToProps,
    { expandWindow, compressWindow  }
  )(FloatingWindowControl);
  
  