import { graphql } from 'react-apollo'
import commonState from 'components/common-state'
import enchance from 'components/enchance'

import Item from './item'
import mutation from './mutation.gql'

export default enchance(
  commonState({ isOpened: false }, {
    click: (state, updateCommonState, { mutate }) => {
      if(state.isOpened == false) mutate()
      updateCommonState({ isOpened: !state.isOpened })
    }
  }),
  graphql(mutation, {
    options: ({ item }) => ({
      variables: { id: item.id },
      updateQueries: {
        orders: (prev, { mutationResult }) => {
          const index = prev.orders.findIndex(order => order.id == item.id)
          return ({ ...prev, orders: [
            ...prev.orders.slice(0, index),
            { ...prev.orders[index], seen: mutationResult.data.seeOrder.seen },
            ...prev.orders.slice(index + 1)
          ] })
        }
      }
    })
  })
)(Item)
