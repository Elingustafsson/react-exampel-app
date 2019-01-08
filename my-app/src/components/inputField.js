import React, { Component } from 'react';
import '../App.sass';


export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "black"
    }
  }

  render() {
    return (
      <div
      style={{backgroundColor: this.props.colorr}} 
      className='input'>
        <p>{this.props.number}</p>
      </div>
    );
  }
}
