import React from 'react';
import { Route, Switch } from 'react-router-dom'
import UserContainer from './containers/UserContainer'
import ProfileContainer from './containers/ProfileContainer'
import NotFoundContainer from './containers/NotFoundContainer'


export default function Routes() {
  return (
    <Switch>
      <Route exact path='/login' component={UserContainer} />
      <Route exact path='/profile' component={ProfileContainer} />
      <Route component={NotFoundContainer} />
    </Switch>
  )
}
