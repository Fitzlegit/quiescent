import React, { Component } from 'react'
import './User.css'

class UserInput extends Component {

  state = {
    username: '',
    password: ''
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.setState({
      email: '',
      password: ''
    })
  }


  render() {
    return (
      <div className="centered">
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <h3>EMAIL</h3>
          <input
            type="email"
            value={this.state.email}
            name='email'
            onChange={event => this.handleOnChange(event)}
            />
            <br/>
            <br/>
            <h4>PASSWORD</h4>
            <input
              type="password"
              value={this.state.password}
              name='password'
              onChange={event => this.handleOnChange(event)}
              />
              <p/>
            <input type="Submit" value="Login/Register" />
        </form>
      </div>
    )
  }

}

export default UserInput;
