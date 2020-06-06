import React from "react";

//Break Label
function BreakLabel() {
        return <p id="break-label"> Break Length </p>
    }

//Session Label
function SessionLabel() {
    return <p id="session-label"> Session Length </p>
}

class Pomodoro extends React.Component{
    constructor(props){
        super(props) 
                this.state = {
                    break : 5,
                    session : 25,
                    count : 25,
                }
        this.handleClickBreakDecrement = this.handleClickBreakDecrement.bind(this);
        this.handleClickBreakIncrement = this.handleClickBreakIncrement.bind(this);
        this.handleClickSessionDecrement = this.handleClickSessionDecrement.bind(this);
        this.handleClickSessionIncrement = this.handleClickSessionIncrement.bind(this);
        this.handleStartStop = this.handleStartStop.bind(this);
    }
    
    handleClickBreakDecrement() {
        this.setState({
            break : this.state.break - 1
        })
    }
    
    handleClickSessionDecrement() {
        this.setState({
            session : this.state.session - 1 ,
            count : this.state.count - 1
        })
    }
    
    handleClickBreakIncrement() {
        this.setState({
            break: this.state.break +1
        })
    }
    
     handleClickSessionIncrement() {
        this.setState({
            session : this.state.session + 1 ,
            count : this.state.count + 1
        })
    }
    
    handleStartStop() {
    this.timer = setInterval(() => this.setState(prevState => {  
        if (prevState.count === 0) return null;

        return {
            count: prevState.count - 1,
        };
        }
        ), 1000);
    }
    
    handleReset(){
        
    }
    
    render(){
        
        let count; 
        
        if(this.state.count % 60 >= 10) {
            count = Math.floor(this.state.count /60)+":"+this.state.count%60
          }
        
        
        return (
                <div>
            
              {/* Break Label */}
        <div className="breakContainer">
                <BreakLabel />
            <div className="breakButton">
                <button id="break-decrement" onClick={this.handleClickBreakDecrement}>
                    handleClickBreakDecrement
                </button>
                <p id="break-length"> {this.state.break} </p>
                <button id="break-increment" onClick={this.handleClickBreakIncrement}>           handleClickBreakIncrement
                </button>
            </div> 
        </div> 
                
                {/* Session Label */}
        <div className="sessionContainer">
                <SessionLabel />
            <div className="sessionButton">
                <button id="session-decrement" onClick={this.handleClickSessionDecrement}>
                    handleClickSessionDecrement
                </button>
                <p id="session-length"> {this.state.session} </p>
                <button id="session-increment" onClick={this.handleClickSessionIncrement}>
                    handleClickSessionIncrement
                </button>
            </div>
        </div>
                
                {/* Timer Label */}
                <div>
                    <p id="timer-label"> Session</p>
                    <p id="time-left">
                    {count}
                    </p>
                </div>
                
                {/* Start, Stop and Reset Button*/}
                <div>
                <button id="start_stop" onClick={this.handleStartStop}>
                    Start/Stop
                </button>
                
                <button id="reset" onClick={this.handleReset}>
                    Reset
                </button>
                </div>
                
            </div>
        )
    } 
}

export default Pomodoro;