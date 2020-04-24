import React, { Component } from 'react'
import './User.css'
import TimerContainer from '../../containers/TimerContainer'

class UserHome extends Component {


  render() {
    return (
      <div className='home_shadow'>
        <div className="home_container">
          <TimerContainer />
        </div>
      </div>

    )
  }
}

export default UserHome;
