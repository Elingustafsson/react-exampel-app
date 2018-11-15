import React, { Component } from 'react';
import '../App.css';


export default class InputField extends Component {
  render() {
    return (
      <div style={style.input}>
        <p style={style.result}>0</p>
      </div>
    );
  }
}

var style = {
  input: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    height: '80px',
    backgroundColor: 'black',
    color: 'white',
  },
  result: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '250%',
  },
}
