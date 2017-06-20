import React from 'react'
import Bundle from './bundle'

export default (load) => {
  return () => <Bundle load={load}>{Comp => Comp && <Comp/>}</Bundle>
}
