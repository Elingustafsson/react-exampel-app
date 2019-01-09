import React, { Component } from 'react';
import '../App.sass';


export default class ChangeColor extends Component {

  render() {
    const {changeColorr, changeOrange, changeColor} = this.props

    return (
      <div className="colorSection">
        <div className="color">
          <p>Whats your fav color?</p>
          <button
            className="colorButton"
            onClick={changeColor}
            >Blue
          </button>
          <button
            className="colorButton"
            onClick={changeColorr}
            >Pink
          </button>
          <button
            className="colorButton"
            onClick={changeOrange}
            >Orange
          </button>
        </div>
      </div>
    );
  }
}
