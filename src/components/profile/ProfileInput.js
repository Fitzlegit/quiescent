import React, { Component } from 'react'
import { MDBInput } from 'mdbreact'
import './Profile.css'
import { connect } from 'react-redux'
import { saveProfile } from '../../actions/profileActions'

class ProfileInput extends Component {

  state = {
    user_id: this.props.current_user.id,
    fullname: '',
    why: '',
    meditations: 0

  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.props.saveProfile(this.state)
    this.setState({
      [event.target.name]: event.target.value
    })
    this.setState({
      fullname: '',
      why: '',
      meditations: 0
    })
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <div className='profile_shadow'>
          <div className='profile_container'>
            <form onSubmit={event => this.handleOnSubmit(event)}>
              <MDBInput
              label='Full Name'
              type='text'
              id='fullname'
              name='fullname'
              required
              value={this.state.fullname}
              onChange={event => this.handleOnChange(event)}
               />

              <MDBInput
              label="Write down your why, what drives you to be succesful?"
              id='textarea'
              type='textarea'
              name='why'
              required
              value={this.state.why}
              rows={5}
              onChange={event => this.handleOnChange(event)}
              />
              <input type='submit' className='submit-btn'/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveProfile: (profile) => dispatch(saveProfile(profile))
  }
}

export default connect(null, mapDispatchToProps)(ProfileInput);
