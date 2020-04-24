import React, { Component } from 'react'
import * as comp from '../components/timer'

class TimerContainer extends Component {

  render() {
    return (
      <div>
        <comp.TimerInput />
      </div>
    )
  }
}

export default TimerContainer;
