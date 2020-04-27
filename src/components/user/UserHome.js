import React, { Component } from 'react'
import './User.css'
import TimerContainer from '../../containers/TimerContainer'
import ProfileContainer from '../../containers/ProfileContainer'

class UserHome extends Component {


  render() {
    return (
      <div className='home_shadow'>
        <div className="home_container">
          <ProfileContainer />
          <TimerContainer />
        </div>
      </div>

    )
  }
}

export default UserHome;
