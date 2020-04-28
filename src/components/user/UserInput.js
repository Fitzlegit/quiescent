import React, { Component } from 'react'
import './User.css'
import { connect } from 'react-redux'
import { fetchUser } from '../../actions/UserActions'
import lotus from '../../img/lotus.svg'


class UserInput extends Component {

  state = {
    email: '',
    password: ''
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.props.fetchUser(this.state)
    this.setState({
      email: '',
      password: ''
    })
  }


  render() {
    return (
      <div className="login_container">
        <img className='logo' src={lotus} alt="lotus" />
        <a className='logo-text'>Quiescent</a>
      <div className="centered">
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <h3>EMAIL</h3>
          <input
            type="email"
            value={this.state.email}
            name='email'
            required
            onChange={event => this.handleOnChange(event)}
            />
            <br/>
            <br/>
            <h4>PASSWORD</h4>
            <input
              type="password"
              value={this.state.password}
              name='password'
              required
              onChange={event => this.handleOnChange(event)}
              />
              <p/>
            <input type="Submit" value="Login/Register" id='submit' />
        </form>
      </div>
      </div>
    )
  }

}


const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (user) => dispatch(fetchUser(user))
  }
}

export default connect(null, mapDispatchToProps)(UserInput);
