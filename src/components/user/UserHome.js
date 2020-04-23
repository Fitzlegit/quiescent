import React, { Component } from 'react'
import './User.css'

class UserHome extends Component {


  render() {
    return (
      <div className='home_shadow'>
        <div className="home_container">
        This is our homepage {this.props.current_user.email}
        </div>
      </div>

    )
  }
}

export default UserHome;
