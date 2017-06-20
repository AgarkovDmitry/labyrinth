import { graphql } from 'react-apollo'

import query from './query.gql'
import Component from './component'

export default graphql(query)(Component)
