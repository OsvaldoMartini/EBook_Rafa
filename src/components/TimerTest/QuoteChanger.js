import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./quoter.css"

const QuoteChanger = props => {
  useEffect(() => {
    const timer = setTimeout(
      () => props.dispatch({ type: "CHANGE_QUOTE" }),
      5000
    );
    return () => clearTimeout(timer);
  });
  return <div>{props.quote}</div>;
};

const mapStateToProps = state => ({
  quote: state.quote
});

export default connect(mapStateToProps)(QuoteChanger);