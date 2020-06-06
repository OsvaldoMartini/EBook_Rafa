import React from 'react';

const Button = (props) => {
  return (
    <button className="btn pink darken-4" onClick={props.toggle}>
      {props.name}
    </button>
  );
};

export default Button;
