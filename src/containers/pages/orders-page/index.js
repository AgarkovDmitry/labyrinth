import React from 'react'
import { connect } from 'react-redux'

import OrderList from './order-list'

const style = { paddingTop: '5vh' }
const page = ({ title, token }) => {
  return (
    <div style={style} className='order'>
      {title}
      {token && <OrderList />}
    </div>
  )
}
export default connect(state => ({ token: state.auth.token }))(page)
