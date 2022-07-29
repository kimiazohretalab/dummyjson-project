import React from 'react'
import {Header} from '../header'

export const Layout = ({children}) => {
  return (
      <>
        <Header/>
        <div className="container" style={{padding: '50px 0'}}>{children}</div>

      </>
  )
}
