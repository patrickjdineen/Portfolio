import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>I am Patrick</strong>
        <p />
        <strong>I am a...</strong>
        <p />
        Software Developer
        <p />
        and a Client Support Manager
        <p />
        and a Photographer
        <p />
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
