import React from 'react'
import OrderBody from '../order-body'

export default ({ item, isOpened }) => {
  return (
    isOpened
    ? <div>
        <hr/>
        <OrderBody id={item.id}/>
    </div>
    : null
  )
}
