import React from 'react'
import { render } from 'react-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { ApolloClient, createNetworkInterface } from 'react-apollo'

import createStore from 'store'
import { signIn } from 'store/actions'

import App from './app'
import './assets/styles/style.less'

const history = createBrowserHistory()

const networkInterface = createNetworkInterface({ uri: `${window.location.origin}/graphql` })

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options) req.options = { header: {} }
    if (!req.options.headers) req.options.headers = {}

    const token = JSON.parse(localStorage.getItem('token'))
    if(token){
      if(token.expiresIn < (new Date()).getTime()) localStorage.removeItem('token')
      else req.options.headers.token = token.value
    }

    next()
  }
}])

const client = new ApolloClient({ networkInterface })
const store = window.store = createStore(client)

const token = JSON.parse(localStorage.getItem('token'))
if (token) {
  if(token.expiresIn < (new Date()).getTime()) localStorage.removeItem('token')
  else store.dispatch(signIn(token.value))
}

render(
  <App {...{ history, client, store }} />, document.getElementById('Main')
)
