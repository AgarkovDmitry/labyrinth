import loadHome from 'bundle-loader?lazy&name=home!./home-page'
import loadOrders from 'bundle-loader?lazy&name=orders!./orders-page'

import asyncComponent from 'components/async-component'

const Home = asyncComponent(loadHome)
const Orders = asyncComponent(loadOrders)

export { Home, Orders }
