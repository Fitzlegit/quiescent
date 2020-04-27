import React, { Component } from 'react'
import { MDBInput } from 'mdbreact'
import './Profile.css'

class ProfileInput extends Component {

  state = {
    name: '',
    text: '',
    medTimes: 0

  }

  handleOnSubmit(event) {
    event.preventdefault()
    //some dispatch request
    this.setState({
      [event.target.name]: event.target.value
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
        <div className='container'>
        <form>


          <MDBInput
          label="Write your goal for today"
          id='textarea'
          type='textarea'
          name='text'
          value={this.state.text}
          rows={5}
          onChange={event => this.handleOnChange(event)}
          />
        </form>
        </div>
      </div>
    )
  }
}

export default ProfileInput;
