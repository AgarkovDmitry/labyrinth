import { graphql, gql } from 'react-apollo'

import Component from './component'

const query = gql`
  fragment order on Order {
    id,
    date,
    company,
    industry,
    service,
    seen{
      ...user
    }
  }

  fragment user on User {
    id,
    name,
    surname
  }

  query orders{
    orders {
      ...order
    }
  }
`

export default graphql(query)(Component)
