import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer as Route } from "react-router-bootstrap";
import Routes from '../../Routes';
import lotus from '../../img/lotus.svg'
import { connect } from 'react-redux'
import { clearUser } from './../../actions/UserActions'
import { fetchProfile } from '../../actions/profileActions'

class Navigation extends Component {

  render() {

  const isLoggedin = [
    <Route to="/">
      <Nav.Link>Home</Nav.Link>
    </Route>,
    <Route to="/profile">
      <Nav.Link>Profile</Nav.Link>
    </Route>,
    <Route to="/logout">
      <Nav.Link onClick={() => this.props.clearUser()}>Logout</Nav.Link>
    </Route>
  ]

    return (
        <div>
          <container>
          <Navbar bg="dark" variant='dark' expand="md" className="sticky-top">
            <Navbar.Brand>
              <img
                className='d-inline-block align-top'
                src={lotus}
                alt="lotus"
                width='30'
                height='30'
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className=" justify-content-end link-text">
                { this.props.current_user.id === undefined ?
                  <Route to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </Route>
                  :
                  isLoggedin
              }
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Routes />
          </container>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    current_user: state.user.current_user
  }
}


export default connect(mapStateToProps, { clearUser })(Navigation);
