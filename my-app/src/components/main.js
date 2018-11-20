import React, { Component } from 'react';
import InputField from './inputField';
import Numbers from './numbers';
import '../App.css';


export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    }
    this.clickNumber = this.clickNumber.bind(this);
  }

  clickNumber(e) {
    console.log(e.target.className)
    if (e.target.className === 'button1') {
      this.setState(state => ({
        number: 1
      }));
    }
    if (e.target.className === 'button2') {
      this.setState(state => ({
        number: 2
      }));
    }
    if (e.target.className === 'button3') {
      this.setState(state => ({
        number: 3
      }));
    }
    if (e.target.className === 'button4') {
      this.setState(state => ({
        number: 4
      }));
    }
    if (e.target.className === 'button5') {
      this.setState(state => ({
        number: 5
      }));
    }
    if (e.target.className === 'button6') {
      this.setState(state => ({
        number: 6
      }));
    }
    if (e.target.className === 'button7') {
      this.setState(state => ({
        number: 7
      }));
    }
    if (e.target.className === 'button8') {
      this.setState(state => ({
        number: 8
      }));
    }
    if (e.target.className === 'button9') {
      this.setState(state => ({
        number: 9
      }));
    }
  }

  render() {
    return (
      <div style={style.body}>
        <div style={style.main}>
          <InputField number={this.state.number} />
          <div style={style.firstRow}>
            <button style={style.clear}> Clear </button>
            <button style={style.division}> % </button>
          </div>
          <div style={style.buttonRow}>
            <div style={style.buttonRowOne}>
              <Numbers sendProp={this.clickNumber} />
            </div>
            <div style={style.buttonRowTwo}>
              <button style={style.buttonOperators}>x</button>
              <button style={style.buttonOperators}>-</button>
              <button style={style.buttonOperators}>+</button>
              <button style={style.buttonOperators}>=</button>
            </div>
          </div>
          <div style={style.buttonRowThree}>
            <button style={style.buttonZero}>0</button>
            <button style={style.button}>.</button>
          </div>
        </div>
      </div>
    );
  }
}

var style = {
  body: {
    display: 'flex',
    justifyContent: 'center',
  },
  main: {
    marginTop: '20px',
    width: '300px',
    height: '380px',
    border: 'solid black 1px',
  },
  firstRow: {
    display: 'flex',
  },
  clear: {
    width: '80%',
    height: '60px',
  },
  division: {
    width: '20%',
    backgroundColor: 'red',
    color: 'white',
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonRowOne: {
    flexWrap: 'wrap',
    width: '80%',
  },
  buttonRowTwo: {
    flexDirection: 'column',
    width: '20%',
  },
  buttonRowThree: {
    display: 'flex',
    width: '80%',
    marginTop: '-60px',
  },
  buttonOperators: {
    width: '100%',
    height: '60px',
    backgroundColor: 'red',
    color: 'white',
  },
  button: {
    width: '33.3%',
    height: '60px',
  },
  buttonZero: {
    width: '66.6%',
    height: '60px',
  }
}
