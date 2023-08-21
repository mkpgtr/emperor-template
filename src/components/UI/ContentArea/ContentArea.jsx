import React from 'react'

const ContentArea = ({children,shiftRight}) => {
  return (
    <div style={{marginLeft:shiftRight ? '18rem' : "5rem", transition:"0.1s linear all"}}
    className="flex-1 p-5"
    >{children}</div>
  )
}

export default ContentArea