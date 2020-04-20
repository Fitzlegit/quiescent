import React, { Component }  from 'react'

class Timer extends Component {
  constructor(name) {
    this.name = name;
    this.time = 0;
    this.isRunning = false;
  }
}


export default Timer;
