import React, { Component } from 'react'
import * as comp from '../components/profile'
import { connect } from 'react-redux'

class ProfileContainer extends Component {

  render() {
    return (
      <div>
        <comp.ProfileInput />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    current_user: state.current_user,
  }
}


export default connect(mapStateToProps)(ProfileContainer);
