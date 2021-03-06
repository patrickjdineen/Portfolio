import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a target='_blank' rel="noreferrer"  href="https://www.instagram.com/patrickjdineen/" className="icon fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a target='_blank' rel="noreferrer" href="https://www.instagram.com/patrickjdineen365/" className="icon fa-instagram">
            <span className="label">Instagram 365</span>
          </a>
        </li>
        <li>
          <a target='_blank' rel="noreferrer"  href="https://github.com/patrickjdineen" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="mailto:patrickjdineen@gmail.com" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
