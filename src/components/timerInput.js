import React, { Component } from 'react'

class TimerInput extends Component {
  state = {
    name: ""
  }

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='Meditation Timer Name'
          name='name'
          value={this.state.name}
          onChange{(event) => this.setState({name: event.target.value})}/>
          <button
            onClick={(event) => {
              this.props.addTimer(this.state.name)
            }}>Save</button>
      </div>
    )
  }
}
