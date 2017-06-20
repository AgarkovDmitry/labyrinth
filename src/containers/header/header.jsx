import React from 'react'

export default ({ history }) => {
  return (
    <header>
      <button onClick={() => history.push('/')} style={{ fontFamily: 'PT_Sans' }}>AddOrder</button>
      <button onClick={() => history.push('/orders')} style={{ fontFamily: 'PT_Sans' }}>ViewOrders</button>
    </header>
  )
}
