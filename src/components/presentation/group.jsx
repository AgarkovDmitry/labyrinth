import React from 'react'

export default ({ children, index, duration }) => {
  return (
    <div style={{
      width: `${100 * children.length}%`,
      transform: `translateX(${-index * window.innerWidth}px)`,
      transition: `all ${duration}ms ease`
    }}>
      {children}
    </div>
  )
}
