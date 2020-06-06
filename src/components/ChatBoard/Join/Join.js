import React, { useState , useEffect} from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import './Join.css';

const SignIn = props => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  useEffect(() => {
    const timer = setTimeout(
      () => props.dispatch({ type: "CHANGE_QUOTE" }),
      5000
    );
    return () => clearTimeout(timer);
  });

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  quote: state.quote
});

export default connect(mapStateToProps)(SignIn);