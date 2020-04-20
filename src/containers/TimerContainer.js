import React, { Component } from 'react'
import { connect } from 'react-redux'
import Timer from '../components/Timer'
import TimerInput from '.../components/TimerInput'

class TimerContainer extends Component {

    render() {
      return (
        <TimerInput addTimer={this.props.addTimer}/>
      )
    }
}

const mapDispatchToProps = dispatch => {
  addTimer: name => dispatch({type: NEW_TIMER, name})
}

export default connect(null, mapDispatchToProps)(TimerContainer)
