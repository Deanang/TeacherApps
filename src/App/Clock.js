import React, { Component } from "react"
import { Typography } from "@material-ui/core"

class App extends Component {
  state = {
    time: new Date()
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      time: new Date()
    })
  }

  render() {
    const myCenter = {
      textAlign: "center"
    }
    return (
      <>
        <div>
          <h1 style={myCenter}>The Clock App</h1>
        </div>
        <Typography align="center" variant="h2" component="h2" gutterBottom>
          {this.state.time.toLocaleTimeString()}
        </Typography>
      </>
    )
  }
}

export default App
