import React from 'react'
import { Router, Route, Switch } from 'react-router'
import { ApolloProvider } from 'react-apollo'

import { Home, Orders } from 'containers/pages'
import Auth from 'containers/dialogs/sign-in-dialog'
import Header from 'containers/header'

export default ({ history, client, store }) => {
  return (
    <ApolloProvider client={client} store={store}>
      <Router history={history}>
        <div>
          <Auth/>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/orders' component={Orders}/>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  )
}
