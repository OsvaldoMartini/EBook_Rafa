import React, {
  Component,
  expandWindow,
  compressWindow,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FloatingWindowControl from './FloatingWindowControl';

class FloatingWindowHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expandWindow: true,
      compressWindow: true,
    };
  }

  render() {
    return (
      <div className="window-header">
        <span className="window-title">
          Grid -> Fields and Values
        </span>
        <FloatingWindowControl
          expandWindow={this.state.expandWindow}
          compressWindow={this.state.compressWindow}
        />
      </div>
    );
  }
}

FloatingWindowHeader.propTypes = {
  expandWindow: PropTypes.func,
  compressWindow: PropTypes.func,
};

const mapStateToProps = (state) => ({
  expandWindow: state.expandWindow,
  compressWindow: state.compressWindow,
});

export default connect(mapStateToProps, {
  expandWindow,
  compressWindow,
})(FloatingWindowHeader);
