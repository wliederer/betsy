import React, { useEffect } from 'react'
import './Header.css'
import github from './svgs/github.svg'
import coffee from './svgs/coffee.svg'
import linkedin from './svgs/linkedin.svg'
import hamburger from './svgs/hamburger.svg'
import instagram from './svgs/instagram.svg'
import OutsideClickHandler from './OutsideClickHandler'

const Header = ({ open, setIsOpen }) => {


  window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    // Calculate opacity based on scroll position
    var opacity = Math.min(0.5, scrollPosition / 500);

    // Update the opacity of the header
    header.style.backgroundColor = 'rgba(244, 239, 194, ' + opacity + ')';
  });

  return (
    <header>
      <nav>
        <div className="logo">
          <h1>Free Sticker</h1>
          {/* <div>
            <div
              className="icon-container-logo"
              onClick={() => {
                setIsOpen(!open)
              }}
            >
              <img className="icon" src={hamburger} alt="hamburger" />
              <div>WhoAmI</div>
            </div>
          </div> */}
          {open ? (
            <OutsideClickHandler onOutsideClick={() => setIsOpen(!open)}>
              <div className="overlay-menu">
                <div className="triangle"></div>
                <div>
                  Hi my name is Will and I made this website to share free
                  stickers!
                  {/* <div>
                    Try out my latest NPM package as seen on this page{' '}
                    <a
                      href="https://www.npmjs.com/package/rolly-polly-polls"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Rolly Widget
                    </a>
                  </div> */}
                </div>
              </div>
            </OutsideClickHandler>
          ) : null}
        </div>
        <ul className="nav-links">
          <li className="icon-container">
            <a
              href="https://www.instagram.com/thats_baja_blasphemy/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src={instagram} alt="instagram" />
            </a>
          </li>
          <li className="icon-container">
            <a
              href="https://www.buymeacoffee.com/kittyturbo"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icon" src={coffee} alt="coffee" />
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
