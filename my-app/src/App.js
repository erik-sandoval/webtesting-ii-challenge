import React from 'react';

import './App.css';
import Dashboard from './Dashboard';
import Display from './Display';

class App extends React.Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0,
    hit: 0
  };

  increment = e => {
    e.preventDefault();

    if (this.state.strike < 3 && this.state.ball < 4) {
      if (e.target.name === 'foul') {
        this.setState({
          foul: this.state.foul + 1,
          strike: this.state.strike + 2
        });
      } else {
        this.setState({
          ...this.state,
          [e.target.name]: this.state[e.target.name] + 1
        });
      }
    } else {
      this.setState({
        ...this.state,
        strike: 0,
        ball: 0
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <Display state={this.state} increment={this.increment} />
        <Dashboard state={this.state} increment={this.increment} />
      </div>
    );
  }
}

export default App;
