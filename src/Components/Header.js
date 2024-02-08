import React from 'react'
import './Header.css'
import github from './svgs/github.svg'
import linkedin from './svgs/linkedin.svg'
import hamburger from './svgs/hamburger.svg'
import OutsideClickHandler from './OutsideClickHandler'

const Header = ({ open, setIsOpen }) => {
  return (
    <header>
      <nav>
        <div className="logo">
          <h1>Betsy</h1>
          <div>
            <div
              className="icon-container-logo"
              onClick={() => {
                setIsOpen(!open)
              }}
            >
              <img className="icon" src={hamburger} alt="hamburger" />
              <div>WhoAmI</div>
            </div>
          </div>
          {open ? (
            <OutsideClickHandler onOutsideClick={() => setIsOpen(!open)}>
              <div className="overlay-menu">
                <div className="triangle"></div>
                <div>
                  Hi My name is Will and I made this website to show off
                  stickers and code.
                  <div>
                    Try out my latest NPM package as seen on this page{' '}
                    <a
                      href="https://www.npmjs.com/package/rolly-polly-polls"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Rolly Widget
                    </a>
                  </div>
                </div>
              </div>
            </OutsideClickHandler>
          ) : null}
        </div>
        <ul className="nav-links">
          <li className="icon-container">
            <a
              href="https://github.com/wliederer"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src={github} alt="github" />
            </a>
          </li>
          <li className="icon-container">
            <a
              href="https://www.linkedin.com/in/william-liederer"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src={linkedin} alt="linkedin" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
