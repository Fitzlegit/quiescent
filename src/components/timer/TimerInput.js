import React, { Component } from 'react'
import './Timer.css'

class TimerInput extends Component {

  state = {
    minutes: '02',
    seconds: '00',
    isRunning: false
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value.slice(0, 2)
    })
  }

  startTimer(event) {
    if(this.state.isRunning === false){
      this.setState({
        isRunning: true,
        [event.target.name]: event.target.value
      })

      this.timer = setInterval(() => {
        const { seconds, minutes } = this.state


        if (seconds > 10) {
          this.setState({
            seconds: seconds - 1
          })
        } else if(seconds > 0) {
          this.setState({
            seconds: '0' + (seconds - 1)
          })
        }

        if(minutes < 11 & seconds === '00' & minutes > 0 ){
          this.setState({
            minutes: '0' + (minutes - 1),
            seconds: 59
          })
        } else if(minutes > 10  & seconds === '00') {
          this.setState({
            minutes: minutes - 1,
            seconds: 59
          })
        }


        if (seconds === '00') {
          if (minutes === '00') {
            clearInterval(this.timer)
            this.setState({
              isRunning: false
            })
          }
        }
      }, 1000)
    }
  }

  stopTimer(event) {
    if(this.state.isRunning === true ) {
      this.setState({
        isRunning: false
      })
    }
    clearInterval(this.timer)
  }

  resetTimer(){

  }



  render() {
    return (
        <div className="container">
            <div>
              <br/>
              <input
                type='number'
                name='minutes'
                id='minutes'
                value={this.state.minutes}
                maxLength='2'
                min='00'
                max='60'
                onChange={event => this.handleOnChange(event)}
                />
                <span>:</span>
              <input
                type='number'
                name='seconds'
                id='seconds'
                value={this.state.seconds}
                maxLength='2'
                min='00'
                max='60'
                onChange={event => this.handleOnChange(event)}
                />
                <br/>
                <button className='my-button' onClick={event => this.startTimer(event)}>Start</button>
                <button className='my-button' onClick={event => this.stopTimer(event)}>Pause</button>
              </div>
        </div>
    )
  }
}

export default TimerInput;
