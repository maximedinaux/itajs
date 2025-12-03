import React from 'react'
//components
import MenuMain from '../components/MenuMain'
//scss
import '../scss/reset.scss'

const Layout = ({ children }) => {
  return (
    <div class='main'>
      <h1>Layout</h1>
      <MenuMain />
      <div class='content'>{children}</div>
    </div>
  )
}

export default Layout
