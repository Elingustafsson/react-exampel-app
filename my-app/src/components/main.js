import React, { Component } from 'react';
import InputField from './inputField';
import '../App.css';


export default class Main extends Component {

  render() {
    const numbers = [1,2,3,4,5,6,7,8,9];
    return (
      <div style={style.body}>
        <div style={style.main}>
          <InputField />
          <div style={style.firstRow}>
            <button style={style.clear}> Clear </button>
            <button style={style.division}> % </button>
          </div>
          <div style={style.buttonRow}>
            <div style={style.buttonRowOne}>
              {numbers.map(i => {
                return <button style={style.button} className={'button' + i}>{i}</button>
              })}
            </div>
            <div style={style.buttonRowTwo}>
              <button style={style.buttonOperators}>-</button>
              <button style={style.buttonOperators}>+</button>
              <button style={style.buttonOperators}>=</button>
            </div>
          </div>
          <p>Plats för 0</p>
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
    height: '400px',
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
    display: 'flex',
    flexWrap: 'wrap',
    width: '80%',
  },
  buttonRowTwo: {
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
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
  }
}
