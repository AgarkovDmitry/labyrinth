import React from 'react'

import Body from './body'
import Head from './head'

export default (props) => {
  return (
    <div>
      <Head {...props}/>
      <Body {...props}/>
    </div>
  )
}
