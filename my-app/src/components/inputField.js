import React, { Component } from 'react';
import '../App.sass';


export default class InputField extends Component {
  render() {
    return (
      <div className='input'>
        <p>{this.props.number}</p>
      </div>
    );
  }
}
