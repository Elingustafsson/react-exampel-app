import React, { Component } from 'react';
import '../App.scss';


export default class Numbers extends Component {


  render() {
    const number = [1,2,3,4,5,6,7,8,9];
    return (
      number.map(i => {
        return <button
          onClick={this.props.sendProp}
          style={style.button}
          key={i}
          className={'button' + i}>{i}
        </button>
      })
    );
  }
}

var style = {
  button: {
    width: '33.3%',
    height: '60px',
  },
}
