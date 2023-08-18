import React from 'react'

const ContentArea = ({children}) => {
  return (
    <div
    className="h-screen flex-1 p-7"
    >{children}</div>
  )
}

export default ContentArea