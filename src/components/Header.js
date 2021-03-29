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
        <br />
        I am a software Developer
        <br />
        and a Client Support Manager
        <br />
        and a Photographer
        <br />
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
