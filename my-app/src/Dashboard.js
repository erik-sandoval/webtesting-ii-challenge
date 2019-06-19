import React from 'react';

class Dashboard extends React.Component {
  handleClick = e => {
    this.props.increment(e);
  };

  render() {
    return (
      <div>
        <h1>Score DashBoard</h1>
        <button name="strike" onClick={this.handleClick}>
          Strike
        </button>
        <button name="ball" onClick={this.handleClick}>
          Ball
        </button>
        <button name="foul" onClick={this.handleClick}>
          Foul
        </button>
        <button name="hit" onClick={this.handleClick}>
          Hit
        </button>
      </div>
    );
  }
}

export default Dashboard;
