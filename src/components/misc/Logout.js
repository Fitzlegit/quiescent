import React, { Component } from 'react'
import { connect } from 'react-redux'

const Logout = props => {

}

const mapStateToProps = state => {
  return { current_user: state.user.current_user
  }
}

const mapDispatchToProps = dispatch => {
  dispatch({})
}


export default connect(mapStateToProps,mapDispatchToProps)(Logout);
