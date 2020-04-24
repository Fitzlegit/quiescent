import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as comp from '../components/user'


class UserContainer extends Component {

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.current_user.id === undefined ? <comp.UserInput/> : <comp.UserHome current_user={this.props.current_user} /> }
        <comp.UserHome current_user={this.props.current_user} />
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    current_user: state.current_user,
  }
}

export default connect(mapStateToProps)(UserContainer)
