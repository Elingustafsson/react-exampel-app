import React, { Component } from 'react';
import InputField from './inputField';
import Numbers from './numbers';
import '../App.scss';


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

      function checkInput(operator, number1, number2) {
        var result;
        if (operator === "-") {
          result = number1 - number2
        } else if (operator === "+") {
          result = number1 + number2
        } else if (operator === "x") {
          result = number1 * number2
        } else if (operator === "%") {
          result = number1 / number2
        }
        return result;
      }

      var result = checkInput(checkOperator[0], numberArray[0], numberArray[1])
      console.log("Första uträkningen", result);
      console.log("Hur många operatorer finns: ", checkOperator.length);

      for(var i = 1; i < checkOperator.length; i++) {
        console.log("Varv: ", i+1);
        result = checkInput(checkOperator[i], result, numberArray[i+1])
        console.log("Rätt svar detta varv", result);
      }
      console.log("slugiltiga svar", result);
      console.log(typeof(result));
      this.setState(state => ({
        number: [result]
      }));
  }

  render() {
    return (
      <div className='body'>
        <div className='main'>
          <InputField number={this.state.number} />
          <div className='firstRow'>
            <button
              onClick={this.clear}
              className='clear'> Clear
            </button>
            <button
              onClick={this.clickNumber}
              className='division'> %
            </button>
          </div>
          <div className='buttonRow'>
            <div className='buttonRowOne'>
              <Numbers sendProp={this.clickNumber} />
            </div>
            <div className='buttonRowTwo'>
              <button
                onClick={this.clickNumber}
                className='multiplication'> x
              </button>
              <button
                onClick={this.clickNumber}
                className='subtraction'> -
              </button>
              <button
                onClick={this.clickNumber}
                className='addition'> +
              </button>
              <button
                onClick={this.equalTo}
                className='equalTo'> =
              </button>
            </div>
          </div>
          <div className='buttonRowThree'>
            <button
              onClick={this.clickNumber}
              className='zero'> 0
            </button>
            <button
              onClick={this.clickNumber}
              className='dot'> .
            </button>
          </div>
        </div>
      </div>
    );
  }
}
