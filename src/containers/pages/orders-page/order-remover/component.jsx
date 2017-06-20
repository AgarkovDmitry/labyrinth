import React from 'react'

export default ({ mutate, id }) => {
  const click = e => {
    e.stopPropagation()
    mutate({
      variables: { id },
      updateQueries: {
        orders: prev => ({
          ...prev,
          orders: prev.orders.filter(item => item.id != id)
        })
      }
    })
  }

  return (
    <button onClick={click}>Delete</button>
  )
}
