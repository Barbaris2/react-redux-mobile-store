import React from 'react'
import { Switch, Route } from 'react-router'
import Phone from './containers/phone'
import Phones from './containers/phones'
import Basket from './containers/basket'

export default (
  <Switch>
    <Route path="/" component={Phones} exact />
    <Route path="/categories/:id" component={Phones} />
    <Route path="/phones/:id" component={Phone} />
    <Route path="/basket" component={Basket} />
  </Switch>
)
