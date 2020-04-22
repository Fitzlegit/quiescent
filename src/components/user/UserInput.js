import React, { Component } from 'react'
import './User.css'

class UserInput extends Component {



  render() {
    return (
      <div className="centered">
        <form>
          <h3>USERNAME</h3>
          <input
            type="text"
            />
            <br/>
            <br/>
            <h4>PASSWORD</h4>
            <input
              type="text"
              />
              <p/>
            <input type="Submit" value="Login" />
        </form>
      </div>
    )
  }

}

export default UserInput;
