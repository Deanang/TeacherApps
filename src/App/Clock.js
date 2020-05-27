import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class App extends Component {
  state = {
    time: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    return (
      <Typography align="center" variant="h1" component="h1" gutterBottom>
        {this.state.time.toLocaleTimeString()}
      </Typography>
    );
  }
}

export default App;
