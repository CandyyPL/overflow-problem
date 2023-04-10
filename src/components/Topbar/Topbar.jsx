import React, { useRef } from 'react'
import { Hamburger, TopbarWrapper } from '@/components/Topbar/Topbar.styles.js'
import Nav from '@/components/Nav/Nav.jsx'

const Topbar = () => {
  const navMenuRef = useRef(null)

  const activateMenu = (e) => {
    e.target.classList.toggle('active')
    navMenuRef.current.classList.toggle('active')
  }

  return (
    <TopbarWrapper>
      <div className="logo">
        <span>WEBSITE</span>
      </div>
      <div className="menu">
        <Hamburger onClick={(e) => activateMenu(e)}>
          <span className="hamburger-line"></span>
        </Hamburger>
        <Nav ref={navMenuRef} />
      </div>
    </TopbarWrapper>
  )
}

export default Topbar
