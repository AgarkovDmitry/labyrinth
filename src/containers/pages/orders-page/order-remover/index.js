import { graphql, gql } from 'react-apollo'

import mutation from './mutation.gql'
import Component from './component'

export default graphql(mutation)(Component)
