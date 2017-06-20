import React from 'react'
import OrderRemover from '../order-remover'

export default ({ item, click }) => {
  return (
    <div onClick={click}>
      {`companyName: ${item.company}, industry: ${item.industry}, service: ${item.service}, date: ${new Date(item.date).toLocaleString()}`}
      <br/>
      <span>
        Seen By: {item.seen.map((item, key) => <span key={key}>{`${item.name} ${item.surname}, `}</span>)}
      </span>
      <br/>
      <OrderRemover id={item.id}/>
    </div>
  )
}
