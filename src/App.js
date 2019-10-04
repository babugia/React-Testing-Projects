import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <div data-test='component-app'>
        <h1 data-test='counter-display'>
          The counter is currently {this.state.counter}
        </h1>
        <button
          data-test='increment-button'
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increment
        </button>
      </div>
    );
  }
}
// TODO: Decrement Button
// TODO: No count below zero, display an error message saying the counter can't go below zero

//https://github.com/flyrightsister/udemy-react-testing-projects/tree/click-counter-challenges/click-counter

export default App;
