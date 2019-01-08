import React, { Component } from 'react';
import '../App.sass';


export default class ChangeColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "blue"
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(e) {
    this.setState(state => ({
      backgroundColor: "pink"
    }))
  }

  render() {
    const {changeColorr} = this.props

    return (
      <div className='color'>
        <p>Whats your fav color?</p>
        <button
        style={{backgroundColor: this.state.backgroundColor}}
        onClick={this.changeColor}
        >Blue
        </button>
        <button
        onClick={changeColorr}
        >Pink</button>
        <button>Orange</button>
      </div>
    );
  }
}
