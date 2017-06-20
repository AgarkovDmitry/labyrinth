import React from 'react'

export default ({ data }) => {
  return (
    <div>
      <div>{data.order && `Description: ${data.order.description}`}</div>
      <div>{data.order && `Contact Name: ${data.order.contactName}`}</div>
      <div>{data.order && `Contact Surname: ${data.order.contactSurname}`}</div>
      <div>{data.order && `Phone: ${data.order.phone}`}</div>
      <div>{data.order && `Email: ${data.order.email}`}</div>
    </div>
  )
}
