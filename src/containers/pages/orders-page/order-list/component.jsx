import React from 'react'
import OrderItem from '../order-item'

export default ({ data }) => {
  return (
    <div>
      {
        data.orders ? data.orders.map(
          item => <OrderItem item={item} key={item.id}/>
        ) : null
      }
    </div>
  )
}
