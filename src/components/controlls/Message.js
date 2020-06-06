import React from 'react';
import Button from './Button';
import ScrollToBottom from 'react-scroll-to-bottom';

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const {
      button_cap,
      header_grid_prop,
      data_grid_prop,
    } = this.props;

    return (
      // <div className="container mg-top">
      <>
        <Button
          name={
            this.state.isOpen
              ? 'Hide ' + button_cap
              : 'Show ' + button_cap
          }
          toggle={this.toggle}
        />

        {this.state.isOpen && (
          <ScrollToBottom>
            <table id="automation" className="fixed">
              {/* <colgroup>
                  {RenderColGrp}             
               </colgroup> */}
              <thead>
                <tr>{header_grid_prop}</tr>
              </thead>
              <tbody>{data_grid_prop}</tbody>
              <tfoot>
                <tr>{header_grid_prop}</tr>
              </tfoot>
            </table>
          </ScrollToBottom>
        )}
      </>
    );
  }
}

export default Message;
