import React, { Component } from 'react';
import InputField from './inputField';
import Numbers from './numbers';
import '../App.css';


export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: [],
    }
    this.clickNumber = this.clickNumber.bind(this);
  }

  clickNumber = (e) => {
    console.log(e.target.className)
    if (e.target.className === 'button1') {
      this.setState(state => ({
        number: [...this.state.number, 1]
      }));
    }
    if (e.target.className === 'button2') {
      this.setState(state => ({
        number: [...this.state.number, 2]
      }));
    }
    if (e.target.className === 'button3') {
      this.setState(state => ({
        number: [...this.state.number, 3]
      }));
    }
    if (e.target.className === 'button4') {
      this.setState(state => ({
        number: [...this.state.number, 4]
      }));
    }
    if (e.target.className === 'button5') {
      this.setState(state => ({
        number: [...this.state.number, 5]
      }));
    }
    if (e.target.className === 'button6') {
      this.setState(state => ({
        number: [...this.state.number, 6]
      }));
    }
    if (e.target.className === 'button7') {
      this.setState(state => ({
        number: [...this.state.number, 7]
      }));
    }
    if (e.target.className === 'button8') {
      this.setState(state => ({
        number: [...this.state.number, 8]
      }));
    }
    if (e.target.className === 'button9') {
      this.setState(state => ({
        number: [...this.state.number, 9]
      }));
    }
    if (e.target.className === 'zero') {
      this.setState(state => ({
        number: [...this.state.number, 0]
      }));
    }
    if (e.target.className === 'addition') {
      this.setState(state => ({
        number: [...this.state.number, '+']
      }));
    }
    if (e.target.className === 'multiplication') {
      this.setState(state => ({
        number: [...this.state.number, 'x']
      }));
    }
    if (e.target.className === 'subtraction') {
      this.setState(state => ({
        number: [...this.state.number, '-']
      }));
    }
    if (e.target.className === 'division') {
      this.setState(state => ({
        number: [...this.state.number, '%']
      }));
    }
    if (e.target.className === 'dot') {
      this.setState(state => ({
        number: [...this.state.number, '.']
      }));
    }
  }

  clear = () => {
    console.log('clear array');
    this.setState(state => ({
      number: [],
    }));
  }

  equalTo = (e) => {
    /*Ta arrayen och gör till en string och spara i ny variabel*/
      var stringArray = this.state.number.toString();
      console.log(stringArray);
    /*Ta stringen och ta bort alla ,(komma) och ersätt med ''(inget) och spara i ny variabel*/
      var newStringArray = stringArray.replace(/,/g, '');
      console.log(newStringArray);
      console.log("detta är en ", typeof(newStringArray));
    /*Ta +%-x uttryck och spara i en ny string variabel*/
    /*Gör så jag bara behöver skriva regex istället för hela uttrycket*/
      var regex = /[+%\-x]/g;
      var checkOperator = newStringArray.match(regex);
      console.log("operator ",checkOperator);
    /*Gör stringen till en array*/
      var slicedArray = newStringArray.split(regex);
      console.log("detta är en ", typeof(slicedArray));
      console.log(slicedArray);
    /*Ta items ifrån array och gör till nummer*/
      var numberArray = slicedArray.map(element => Number(element));
      console.log(numberArray);
      /*
        gör samma sak som map
          var x1 = slicedArray[0];
          var x2 = slicedArray[1];

          var a = Number(x1)
          console.log(a);
          var b = Number(x2);
          console.log(b);
      */

        /*
        Case
          input: [22, -, 66, +, 88, -, 77]
          operators =  ["-", "+", "-"]
          numbers =   [22, 66, 88, 77]

          SUDO
          Funktion som kollar vilken operator som finns i arrayen.
          Berätta vad varje operator ska göra.
          Returnera resultat.

          Ta operators[0] och placera mellan numbers[0] & numbers[1]. Spara resultat i variabel.

          Gör en loop som går igenom operators och placera mellan result och numbers[x+x]. Uppdatera resultat variabel.
          Ta operator[1] och placera mellan resultat och numbers[2]. Uppdatera resultat variabel.
          Ta operator[2] och placera mellan resultat och numbers[3]. Uppdatera resultat variabel.
        */

        
  }

  render() {
    return (
      <div style={style.body}>
        <div style={style.main}>
          <InputField number={this.state.number} />
          <div style={style.firstRow}>
            <button
              style={style.clear}
              onClick={this.clear}
              className='clear'> Clear
            </button>
            <button
              style={style.division}
              onClick={this.clickNumber}
              className='division'> %
            </button>
          </div>
          <div style={style.buttonRow}>
            <div style={style.buttonRowOne}>
              <Numbers sendProp={this.clickNumber} />
            </div>
            <div style={style.buttonRowTwo}>
              <button
                style={style.buttonOperators}
                onClick={this.clickNumber}
                className='multiplication'> x
              </button>
              <button
                style={style.buttonOperators}
                onClick={this.clickNumber}
                className='subtraction'> -
              </button>
              <button
                style={style.buttonOperators}
                onClick={this.clickNumber}
                className='addition'> +
              </button>
              <button
                style={style.buttonOperators}
                onClick={this.equalTo}> =
              </button>
            </div>
          </div>
          <div style={style.buttonRowThree}>
            <button
              style={style.buttonZero}
              onClick={this.clickNumber}
              className='zero'> 0
            </button>
            <button
              style={style.button}
              onClick={this.clickNumber}
              className='dot'> .
            </button>
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
