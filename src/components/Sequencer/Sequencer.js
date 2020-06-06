// import React from 'react';
// import PropTypes from 'prop-types';
// import Tone from 'tone';

// export default class extends React.Component{
//     state= {isPlaying: false, value :''}

//     togglePlaying = evt => this.setState({isPlaying:evt.target.checked})

// render(){
//     const{
//         fireRef,
//         notes=['C3', 'D3','E3','F3','G3','A3','B3,C4'],
//         measures=2
//     }

//     return (
// <div>
//     <inpu type='checkbox' checked={isPlaying} onChange={this.togglePlaying}/>
//     <Transport bpm={200} isPlaying={isPlaying} loop={true} loopEnd='2m'>
// <table style={{margin:'auto'}}>{
//     notes.map(note =>
//     <tr key={note}>
//     <Voice resonance={0.9}>{
//     new Array(measures).fill('x').map((_,m)=>[0,1,2,3].map(beat=> {
//         const time= `${m}:${beat}`,
//         key = `${note}@${time}`
//         return <td key={key}>
// <Sample beat={beat} note={note} time={time} duration='8m' baseRef={fireRef}/>

//         </td>
//     }))}
//         </Voice>
//         </tr>)}
//         </table>
//         </Transport>
//         </div>)
//         }
// }

// class Transport extends React.Component{
//     getChildContext(){
//         return {transport: Tone.Transport}
//     }
// componentDidMount(){
//     this.loadProps(this.props) 
// }

// loadProps({
//     isPlaying=false,
//     loop=false,
//     loopEnd, bpm=120
// }) {
//     const {Transport} = Tone;
//     if (isPlaying) {
//         Transport.start();
//     }else{
//         Transport.stop();
//     }

//     Transport.loop = loop;
//     Transport.loopEnd = loopEnd;
//     Transport.bpm.value = bpm;
//     }

//     render(){
//         return <div>{this.props.children}</div>
//     }
// }

// const timeT = PropTypes.oneOfType([
//     PropTypes.number,
//     PropTypes.string
// ])

// }
