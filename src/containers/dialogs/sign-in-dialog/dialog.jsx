import React from 'react'

import Body from './body'
import Trigger from './trigger'

export default (props) => {
  return (
    <div>
      <Trigger {...props}/>
      <Body {...props}/>
    </div>
  )
}
