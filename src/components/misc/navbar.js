import React, { Component } from 'react';
import UserContainer from '../../containers/UserContainer'
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer as Route } from "react-router-bootstrap";
import Routes from '../../Routes';
import lotus from '../../img/lotus.svg'
import * as comp from '../../components/user'
import { connect } from 'react-redux'

class Navigation extends Component {

  render() {
    return (
        <div>
          <container>
          <Navbar bg="dark" expand="md" className="sticky-top">
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
              <Nav className=" justify-content-end">
                <Route to="/profile">
                  <Nav.Link>Profile</Nav.Link>
                </Route>
                { this.props.current_user.id === undefined ?
                  <Route to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </Route>
                  :
                  <Route to="/logout">
                    <Nav.Link>Logout</Nav.Link>
                  </Route>
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
    current_user: state.current_user
  }
}


export default connect(mapStateToProps)(Navigation);
