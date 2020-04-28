import React, { Component } from 'react'
import * as comp from '../components/profile'
import { connect } from 'react-redux'

class ProfileContainer extends Component {



  render() {

    return (
      <div>
        {
          this.props.current_user.id === undefined ? null :
          (this.props.current_profile === undefined) ?
          <comp.ProfileInput current_user={this.props.current_user}/> :
          <comp.Profile key={this.props.current_profile.id} current_profile={this.props.current_profile}/>
        }

      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    current_user: state.user.current_user,
    current_profile: state.profile.current_profile
  }
}


export default connect(mapStateToProps)(ProfileContainer);
